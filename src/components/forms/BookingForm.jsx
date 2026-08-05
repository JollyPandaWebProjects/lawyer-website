import { useState } from 'react';
import booking from '../../data/booking.json';
import { validateFields } from '../../utils/validation.js';
import { sendBookingRequest } from '../../services/emailService.js';
import { trackEvent } from '../../services/analyticsService.js';
import FormField from './FormField.jsx';
import Button from '../common/Button.jsx';

const STATUS = { IDLE: 'idle', SUBMITTING: 'submitting', SUCCESS: 'success', ERROR: 'error' };

export default function BookingForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [serverError, setServerError] = useState('');

  const handleChange = (fieldId, value) => {
    setValues((prev) => ({ ...prev, [fieldId]: value }));
    setErrors((prev) => ({ ...prev, [fieldId]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fieldErrors = validateFields(booking.fields, values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus(STATUS.SUBMITTING);
    setServerError('');
    try {
      await sendBookingRequest(values);
      setStatus(STATUS.SUCCESS);
      trackEvent('booking_submit_success');
      setValues({});
    } catch (err) {
      setStatus(STATUS.ERROR);
      setServerError(err.message || booking.errorMessage);
      trackEvent('booking_submit_error');
    }
  };

  if (status === STATUS.SUCCESS) {
    return (
      <div role="status" className="rounded-theme border border-success bg-surface p-6 text-center text-success">
        {booking.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 md:grid-cols-2">
      {booking.fields.map((field) => (
        <div key={field.id} className={field.type === 'textarea' || field.type === 'checkbox' ? 'md:col-span-2' : ''}>
          <FormField
            field={field}
            value={values[field.id]}
            error={errors[field.id]}
            onChange={handleChange}
            options={field.id === 'consultationType' ? booking.consultationTypes : undefined}
          />
        </div>
      ))}

      {status === STATUS.ERROR && (
        <p role="alert" className="md:col-span-2 text-sm text-error">
          {serverError}
        </p>
      )}

      <div className="md:col-span-2">
        <Button type="submit" variant="accent" disabled={status === STATUS.SUBMITTING} className="w-full md:w-auto">
          {status === STATUS.SUBMITTING ? 'در حال ارسال...' : booking.submitLabel}
        </Button>
      </div>
    </form>
  );
}
