import person from '../../data/person.json';
import contact from '../../data/contact.json';
import navigation from '../../data/navigation.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-bold">{person.fullName}</h2>
            <p className="mt-2 text-sm text-border">{person.professionalTitle} | {person.city}</p>
          </div>

          <nav aria-label="لینک‌های فوتر">
            <h3 className="mb-3 text-sm font-semibold text-accent">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm">
              {navigation.items.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-border hover:text-surface">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-accent">راه‌های ارتباطی</h3>
            <ul className="space-y-2 text-sm text-border">
              <li>{contact.address}</li>
              <li dir="ltr" className="text-right">
                {contact.phone}
              </li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary-dark pt-6 text-xs text-border md:flex-row">
          <p>
            © {year} {person.fullName}. تمامی حقوق محفوظ است.
          </p>
          <p>
            Designed &amp; Developed by{' '}
            <a
              href="http://www.jollypanda.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Jolly Panda Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
