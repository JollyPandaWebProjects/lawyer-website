export default function Section({ id, title, subtitle, children, className = '', tone = 'light' }) {
  const toneClasses = tone === 'dark' ? 'bg-primary text-surface' : 'bg-background text-text-primary';

  return (
    <section id={id} aria-labelledby={title ? `${id}-heading` : undefined} className={`${toneClasses} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        {title && (
          <header className="mb-10 text-center md:mb-14">
            <h2 id={`${id}-heading`} className="font-heading text-2xl font-bold md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className={`mx-auto mt-3 max-w-2xl text-sm md:text-base ${tone === 'dark' ? 'text-border' : 'text-text-secondary'}`}>
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
