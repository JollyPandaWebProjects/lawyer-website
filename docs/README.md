# وب‌سایت شخصی وکیل | نسخه سمپل (Sample)

سایت شخصی و حرفه‌ای برای معرفی خدمات حقوقی، دریافت درخواست مشاوره و بهبود Local SEO.
ساخته‌شده توسط **Jolly Panda Studio**.

> ℹ️ این نسخه با اطلاعات **سمپل (نمونه)** — نام، اطلاعات تماس، بیوگرافی و نظرات — تکمیل
> شده تا ساختار، طراحی و عملکرد کامل سایت قابل مشاهده باشد. برای رسیدن به نسخه نهایی،
> چک‌لیست `docs/DEFAULT_CONTENT.md` را دنبال کنید و فقط فایل‌های JSON را ویرایش کنید —
> نیازی به تغییر کد نیست.

## پشته فناوری

- React 18 + Vite 5
- Tailwind CSS 3
- JavaScript (بدون TypeScript)
- EmailJS برای فرم‌ها

## معماری Data-Driven

هیچ متن، رنگ، تصویر یا اطلاعات تماسی در کامپوننت‌ها Hardcode نشده است.
تمام محتوای قابل ویرایش در `src/data/*.json` نگهداری می‌شود:

| فایل | محتوا |
|---|---|
| `person.json` | نام، عنوان، بیوگرافی، تخصص‌ها |
| `theme.json` | رنگ‌ها، تایپوگرافی، Radius، Shadow |
| `media.json` | تصاویر/ایموجی‌ها (خودکار تشخیص داده می‌شوند) |
| `navigation.json` | منوی سایت |
| `seo.json` | متادیتا، Open Graph، Twitter Card، JSON-LD |
| `contact.json` | اطلاعات تماس + فیلدهای فرم تماس |
| `services.json` | خدمات حقوقی |
| `testimonials.json` | نظرات موکلین (Placeholder) |
| `faq.json` | سوالات متداول |
| `booking.json` | تنظیمات و فیلدهای فرم درخواست مشاوره |
| `process.json` | مراحل روند همکاری |
| `sections.json` | ترتیب و فعال/غیرفعال بودن بخش‌های صفحه |

## راه‌اندازی سریع

```bash
npm install
cp .env.example .env   # سپس مقادیر EmailJS را وارد کنید
npm run dev
```

برای جزئیات کامل به `docs/SETUP_GUIDE.md` و `docs/EMAILJS_SETUP.md` مراجعه کنید.

## ساختار پوشه‌ها

```
src/
  components/   کامپوننت‌های common, forms, layout, seo
  sections/     بخش‌های صفحه (Hero, About, Services, ...)
  data/         تمام محتوای JSON
  services/     EmailJS و Analytics
  utils/        Validation, mediaResolver, sectionRegistry
```

## نکات مهم پیش از انتشار

این نسخه با اطلاعات سمپل تکمیل شده است. پیش از انتشار نهایی، چک‌لیست کامل را در
`docs/DEFAULT_CONTENT.md` دنبال کنید (نام، اطلاعات تماس، خدمات، نظرات، تصاویر و SEO).

---
Designed & Developed by [Jolly Panda Studio](http://www.jollypanda.ir)
