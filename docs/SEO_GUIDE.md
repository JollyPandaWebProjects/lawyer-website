# راهنمای سئو (SEO_GUIDE)

## پیاده‌سازی فعلی

### Meta Tags

- `index.html` مقادیر پیش‌فرض Title/Description را برای اولین Paint و کراولرهایی که JS اجرا نمی‌کنند شامل می‌شود.
- کامپوننت `src/components/seo/SEO.jsx` مقادیر `src/data/seo.json` را در زمان اجرا (Runtime) روی `document.head` اعمال می‌کند تا با تغییر JSON، نیازی به تغییر کد نباشد.

### Open Graph / Twitter Card

مقادیر `og:*` و `twitter:*` از بخش‌های `openGraph` و `twitter` در `seo.json` خوانده می‌شوند.

### JSON-LD (Schema.org)

Schema از نوع `Attorney` در `seo.json` → `jsonLd` تعریف شده و به‌صورت خودکار به `<head>` تزریق می‌شود.

### Semantic HTML

- هر Section از تگ `<section>` با `aria-labelledby` استفاده می‌کند.
- سلسله‌مراتب عنوان‌ها: `h1` فقط در Hero، `h2` برای عنوان هر Section، `h3` برای زیرعنوان‌ها.
- ناوبری با `<nav aria-label="...">`.

### Alt Text تصاویر

تمام تصاویر از طریق `MediaRenderer` رندر می‌شوند و مقدار `alt` مستقیماً از `media.json` خوانده می‌شود؛ هیچ `<img>` بدون `alt` وجود ندارد.

## نکاتی که پیش از انتشار باید انجام شود

1. مقدار `canonicalUrl` در `seo.json` را با دامنه نهایی جایگزین کنید.
2. تصویر `og:image` (`/images/og-cover.webp`) را طبق `required-images.md` اضافه کنید — ابعاد پیشنهادی ۱۲۰۰×۶۳۰.
3. `public/sitemap.xml` و `public/robots.txt` را با دامنه نهایی به‌روزرسانی کنید.
4. سایت را در Google Search Console ثبت و Sitemap را ارسال کنید (`docs/SETUP_GUIDE.md`).
5. کیفیت تصاویر واقعی را با فرمت WebP و حجم بهینه بارگذاری کنید.

## Local SEO (مشهد)

- عبارات کلیدی مرتبط با «مشهد» در `title`، `description` و `keywords` در `seo.json` گنجانده شده‌اند.
- `jsonLd.address.addressLocality` مقدار «مشهد» را دارد.
- در صورت داشتن آدرس دقیق دفتر، `mapUrl` در `contact.json` تکمیل و یک نقشه Google Maps در `ContactSection` قابل افزودن است.
- ثبت کسب‌وکار در Google Business Profile با همین اطلاعات تماس توصیه می‌شود (خارج از محدوده این کد).
