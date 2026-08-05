# راهنمای پیکربندی EmailJS

این پروژه از [EmailJS](https://www.emailjs.com/) برای ارسال دو فرم استفاده می‌کند:

1. فرم درخواست وقت مشاوره (`BookingForm`)
2. فرم تماس عمومی (`ContactForm`)

## ۱. ساخت حساب و Service

1. در [emailjs.com](https://www.emailjs.com/) ثبت‌نام کنید.
2. از بخش **Email Services** یک سرویس ایمیل (Gmail، Outlook و ...) متصل کنید.
3. `Service ID` تولیدشده را یادداشت کنید.

## ۲. ساخت قالب‌ها (Templates)

### قالب فرم مشاوره (Booking)

فیلدهای موردنیاز در قالب (مطابق `booking.json`):

- `fullName`
- `phone`
- `consultationType`
- `legalTopic`
- `preferredDate`
- `preferredTime`
- `description`
- `privacyConsent`

### قالب فرم تماس (Contact)

فیلدهای موردنیاز در قالب (مطابق `contact.json` → `form.fields`):

- `name`
- `phone`
- `email`
- `subject`
- `message`

هر دو Template ID را یادداشت کنید.

## ۳. Public Key

از بخش **Account → API Keys**، مقدار `Public Key` را کپی کنید.

## ۴. تنظیم متغیرهای محیطی

در فایل `.env`:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_BOOKING=template_xxxxxxx
VITE_EMAILJS_TEMPLATE_CONTACT=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

هرگز این مقادیر را مستقیماً در کد Hardcode نکنید. تمام فراخوانی‌ها از طریق
`src/services/emailService.js` و `import.meta.env` انجام می‌شود.

## ۵. تست ارسال فرم

```bash
npm run dev
```

فرم‌ها را در محیط توسعه تکمیل و ارسال کنید و از داشبورد EmailJS، رسیدن ایمیل را بررسی کنید.

## نکات امنیتی

- Public Key در سمت کلاینت قابل مشاهده است؛ این طبیعی و بخشی از مدل EmailJS است.
- برای جلوگیری از سوءاستفاده، محدودیت نرخ ارسال (Rate Limiting) را در پنل EmailJS فعال کنید.
- دامنه‌های مجاز برای ارسال را در تنظیمات EmailJS محدود کنید.
