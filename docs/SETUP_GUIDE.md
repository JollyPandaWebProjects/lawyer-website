# راهنمای راه‌اندازی (SETUP_GUIDE)

## پیش‌نیازها

- Node.js نسخه ۱۸ به بالا
- npm نسخه ۹ به بالا

## نصب

```bash
npm install
```

## متغیرهای محیطی

فایل `.env.example` را کپی کرده و به `.env` تغییر نام دهید:

```bash
cp .env.example .env
```

مقادیر EmailJS را طبق `EMAILJS_SETUP.md` تکمیل کنید.

## اجرای محیط توسعه

```bash
npm run dev
```

سایت روی آدرس `http://localhost:5173` در دسترس خواهد بود.

## Build نسخه Production

```bash
npm run build
```

خروجی در پوشه `dist/` تولید می‌شود.

## پیش‌نمایش Build

```bash
npm run preview
```

## استقرار (Deployment)

این پروژه یک Static SPA است و روی هر سرویس Static Hosting قابل انتشار است:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages (با تنظیم `base` در `vite.config.js` در صورت نیاز)

نکته: متغیرهای محیطی `VITE_*` باید در پنل تنظیمات هر سرویس Hosting نیز مقداردهی شوند.

## جایگزینی محتوای سمپل با اطلاعات نهایی

پیش از انتشار نهایی (چک‌لیست کامل در `DEFAULT_CONTENT.md`):

1. اطلاعات تماس واقعی را در `src/data/contact.json` وارد کنید.
2. شماره پروانه وکالت را در `src/data/person.json` → `license` تکمیل و `isVisible` را `true` کنید.
3. تصاویر واقعی را طبق `required-images.md` اضافه و در `src/data/media.json` جایگزین ایموجی‌ها کنید.
4. نظرات واقعی موکلین را پس از دریافت رضایت در `src/data/testimonials.json` جایگزین کنید و `isPlaceholder` را `false` کنید.
5. `src/data/seo.json` → `canonicalUrl` را با دامنه نهایی سایت به‌روزرسانی کنید.

## اتصال به Google Search Console

1. سایت را منتشر کنید.
2. در Google Search Console، دامنه را با روش DNS یا HTML tag تأیید کنید.
3. `public/sitemap.xml` را با آدرس نهایی سایت به‌روزرسانی و در Search Console ثبت کنید.
