import { useState } from 'react';
import contact from '../../data/contact.json';
import { validateFields } from '../../utils/validation.js';
import { sendContactMessage } from '../../services/emailService.js';
import { trackEvent } from '../../services/analyticsService.js';
import FormField from './FormField.jsx';
import Button from '../common/Button.jsx';

const STATUS = { IDLE: 'idle', SUBMITTING: 'submitting', SUCCESS: 'success', ERROR: 'error' };
const { form } = contact;

export default function ContactForm() {
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
    const fieldErrors = validateFields(form.fields, values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus(STATUS.SUBMITTING);
    setServerError('');
    try {
      await sendContactMessage(values);
      setStatus(STATUS.SUCCESS);
      trackEvent('contact_submit_success');
      setValues({});
    } catch (err) {
      setStatus(STATUS.ERROR);
      setServerError(err.message || form.errorMessage);
      trackEvent('contact_submit_error');
    }
  };

  if (status === STATUS.SUCCESS) {
    return (
      <div role="status" className="rounded-theme border border-success bg-background p-6 text-center text-success">
        {form.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {form.fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={values[field.id]}
          error={errors[field.id]}
          onChange={handleChange}
        />
      ))}

      {status === STATUS.ERROR && (
        <p role="alert" className="text-sm text-error">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === STATUS.SUBMITTING} className="w-full md:w-auto">
        {status === STATUS.SUBMITTING ? 'در حال ارسال...' : form.submitLabel}
      </Button>
    </form>
  );
}
