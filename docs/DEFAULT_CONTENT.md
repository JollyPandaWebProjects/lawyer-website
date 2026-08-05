# محتوای نسخه سمپل (SAMPLE VERSION)

این نسخه از سایت با اطلاعات **سمپل (نمونه)** پر شده تا ساختار کامل صفحه، طراحی و عملکرد
قابل مشاهده و تست باشد. تمام اسامی، اطلاعات تماس، بیوگرافی و نظرات موکلین در این نسخه
نمونه هستند و باید پیش از انتشار نهایی با اطلاعات واقعی جایگزین شوند.

مزیت معماری Data-Driven این پروژه این است که برای رسیدن به نسخه نهایی، فقط کافیست مقادیر
فایل‌های JSON زیر ویرایش شوند؛ هیچ تغییری در کد کامپوننت‌ها لازم نیست.

## چک‌لیست تکمیل اطلاعات برای نسخه نهایی

### `src/data/person.json`
- [ ] `fullName` — نام و نام خانوادگی واقعی
- [ ] `shortBiography` و `about` — بیوگرافی واقعی
- [ ] `experienceYears` / `experienceLabel` — سابقه واقعی
- [ ] `license` — شماره پروانه و نهاد صادرکننده (و `isVisible: true` در صورت تمایل به نمایش)
- [ ] `skills` — حوزه‌های تخصصی واقعی

### `src/data/contact.json`
- [ ] `phone`, `whatsapp`, `phoneRaw`, `whatsappRaw`
- [ ] `email`
- [ ] `address`
- [ ] `workingHours`
- [ ] `mapUrl`

### `src/data/services.json`
- [ ] عنوان و توضیح هر خدمت مطابق خدمات واقعی ارائه‌شده

### `src/data/testimonials.json`
- [ ] جایگزینی نظرات نمونه با نظرات واقعی موکلین (پس از دریافت رضایت کتبی برای انتشار)
- [ ] در صورت نبود نظر واقعی، `isEnabled` را روی `false` قرار دهید تا بخش نمایش داده نشود

### `src/data/faq.json`
- [ ] بازبینی و در صورت نیاز افزودن/ویرایش سوالات متداول

### `src/data/booking.json`
- [ ] بازبینی تنظیمات جلسه، روزهای کاری و بازه زمانی

### `src/data/seo.json`
- [ ] `canonicalUrl` — دامنه نهایی سایت
- [ ] `title`, `description`, `keywords` — مطابق نام و شهر واقعی
- [ ] `jsonLd` — اطلاعات Schema.org واقعی

### `src/data/media.json`
- [ ] جایگزینی ایموجی‌های `heroPortrait` و `aboutImage` با تصاویر واقعی (به `required-images.md` مراجعه کنید)

### تنظیمات فنی
- [ ] مقداردهی متغیرهای EmailJS در `.env` (به `EMAILJS_SETUP.md` مراجعه کنید)
- [ ] به‌روزرسانی `public/sitemap.xml` و `public/robots.txt` با دامنه نهایی
