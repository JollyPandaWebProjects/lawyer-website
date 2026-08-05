# CHANGELOG

تمام تغییرات قابل‌توجه این پروژه در این فایل ثبت می‌شود.
قالب بر اساس [Keep a Changelog](https://keepachangelog.com/) و نسخه‌بندی [Semantic Versioning](https://semver.org/) است.

## [1.0.0] - 2026-08-04

### Added

- راه‌اندازی اولیه پروژه با React + Vite + Tailwind CSS.
- معماری کاملاً Data-Driven: تمام محتوا از فایل‌های JSON در `src/data/` خوانده می‌شود
  (`person`, `theme`, `media`, `navigation`, `seo`, `contact`, `services`, `testimonials`,
  `faq`, `booking`, `process`, `sections`).
- پشتیبانی از رندر خودکار تصویر/ایموجی از طریق `MediaRenderer` و `mediaResolver`.
- بخش‌های صفحه: Hero, About, Services, Process, Testimonials, Booking, FAQ, Contact —
  همگی از طریق `sections.json` و `sectionRegistry` قابل ترتیب‌دهی و فعال/غیرفعال‌سازی.
- فرم درخواست مشاوره (`BookingForm`) و فرم تماس (`ContactForm`) با اعتبارسنجی و اتصال به EmailJS.
- دکمه‌های شناور تماس تلفنی و واتس‌اپ (`FloatingContact`).
- پیاده‌سازی کامل SEO: Meta Tags، Open Graph، Twitter Card، JSON-LD (Schema.org Attorney)، Semantic HTML.
- رعایت اصول دسترسی‌پذیری: ARIA labels، Focus States، ناوبری با صفحه‌کلید، ساختار عنوان‌بندی صحیح.
- طراحی کاملاً Responsive و Mobile-First با پشتیبانی کامل از RTL و فونت Vazirmatn.
- مستندسازی کامل پروژه (`README`, `SETUP_GUIDE`, `EMAILJS_SETUP`, `SEO_GUIDE`,
  `DEFAULT_CONTENT`, `required-images`).
- فوتر برند اجباری «Designed & Developed by Jolly Panda Studio».
