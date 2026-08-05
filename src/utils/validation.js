const PHONE_REGEX = /^(0|\+?98)?9\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts both Persian and Latin digits, normalizes to Latin for validation
export function normalizeDigits(value = '') {
  const persian = '۰۱۲۳۴۵۶۷۸۹';
  return value.replace(/[۰-۹]/g, (d) => String(persian.indexOf(d)));
}

export function isValidIranianPhone(value = '') {
  const normalized = normalizeDigits(value).replace(/\s|-/g, '');
  return PHONE_REGEX.test(normalized);
}

export function isValidEmail(value = '') {
  return EMAIL_REGEX.test(value.trim());
}

export function isNonEmpty(value) {
  return typeof value === 'string' ? value.trim().length > 0 : Boolean(value);
}

/**
 * Validates form values against a field schema (as defined in booking.json
 * or contact.json). Returns an object mapping fieldId -> error message.
 * An empty object means the form is valid.
 */
export function validateFields(fields, values) {
  const errors = {};

  fields.forEach((field) => {
    const value = values[field.id];

    if (field.required && !isNonEmpty(value)) {
      errors[field.id] = 'این فیلد الزامی است.';
      return;
    }

    if (!isNonEmpty(value)) return;

    if (field.type === 'tel' && !isValidIranianPhone(value)) {
      errors[field.id] = 'شماره تماس معتبر نیست.';
    }

    if (field.type === 'email' && !isValidEmail(value)) {
      errors[field.id] = 'ایمیل معتبر نیست.';
    }
  });

  return errors;
}
