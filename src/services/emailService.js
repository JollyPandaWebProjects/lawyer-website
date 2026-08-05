import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_BOOKING = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
const TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function assertConfigured() {
  if (!SERVICE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS تنظیم نشده است. لطفاً متغیرهای محیطی را طبق docs/EMAILJS_SETUP.md مقداردهی کنید.'
    );
  }
}

/**
 * Sends the consultation booking form via EmailJS.
 * @param {Object} formValues - key/value pairs matching booking.json field ids
 */
export async function sendBookingRequest(formValues) {
  assertConfigured();
  if (!TEMPLATE_ID_BOOKING) {
    throw new Error('شناسه قالب EmailJS برای فرم درخواست مشاوره تنظیم نشده است.');
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID_BOOKING, formValues, {
    publicKey: PUBLIC_KEY,
  });
}

/**
 * Sends the general contact form via EmailJS.
 * @param {Object} formValues - name, phone, email, subject, message
 */
export async function sendContactMessage(formValues) {
  assertConfigured();
  if (!TEMPLATE_ID_CONTACT) {
    throw new Error('شناسه قالب EmailJS برای فرم تماس تنظیم نشده است.');
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, formValues, {
    publicKey: PUBLIC_KEY,
  });
}
