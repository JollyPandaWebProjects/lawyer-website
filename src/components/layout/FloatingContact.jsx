import contact from '../../data/contact.json';

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-5 left-5 z-50 flex flex-col gap-3"
      role="group"
      aria-label="راه‌های تماس سریع"
    >
      <a
        href={`https://wa.me/${contact.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ارسال پیام واتس‌اپ"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-2xl text-surface shadow-theme transition-transform hover:scale-105"
      >
        <span aria-hidden="true">💬</span>
      </a>
      <a
        href={`tel:${contact.phoneRaw}`}
        aria-label="تماس تلفنی"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-surface shadow-theme transition-transform hover:scale-105"
      >
        <span aria-hidden="true">📞</span>
      </a>
    </div>
  );
}
