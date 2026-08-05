const VARIANTS = {
  primary: 'bg-primary text-surface hover:bg-primary-dark',
  accent: 'bg-accent text-surface hover:opacity-90',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-surface',
  ghost: 'text-primary hover:bg-background',
};

export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-theme px-6 py-3 font-medium transition-colors duration-200 shadow-theme';
  const classes = `${base} ${VARIANTS[variant] || VARIANTS.primary} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
