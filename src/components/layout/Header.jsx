import { useState } from 'react';
import navigation from '../../data/navigation.json';
import media from '../../data/media.json';
import MediaRenderer from '../common/MediaRenderer.jsx';
import Button from '../common/Button.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" className="flex items-center gap-2 font-heading text-lg font-bold text-primary">
          <MediaRenderer media={media.logo} emojiClassName="text-xl" />
          <span>{navigation.brandLabel}</span>
        </a>

        <nav className="hidden md:block" aria-label="ناوبری اصلی">
          <ul className="flex items-center gap-6">
            {navigation.items.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm font-medium text-text-primary hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={navigation.ctaButton.href} variant="accent" className="text-sm">
            {navigation.ctaButton.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-theme border border-border p-2 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span aria-hidden="true" className="text-xl">
            {isOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label="ناوبری موبایل" className="border-t border-border bg-surface md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-3">
            {navigation.items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-theme px-2 py-2 text-sm font-medium text-text-primary hover:bg-background"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button as="a" href={navigation.ctaButton.href} variant="accent" className="w-full text-sm" onClick={() => setIsOpen(false)}>
                {navigation.ctaButton.label}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
