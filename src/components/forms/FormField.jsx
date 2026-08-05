export default function FormField({ field, value, error, onChange, options }) {
  const inputId = `field-${field.id}`;
  const describedBy = error ? `${inputId}-error` : undefined;

  const baseClasses =
    'w-full rounded-theme border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent';

  const label = (
    <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-text-primary">
      {field.label}
      {field.required && (
        <span className="text-error" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
  );

  const errorEl = error && (
    <p id={`${inputId}-error`} role="alert" className="mt-1 text-xs text-error">
      {error}
    </p>
  );

  if (field.type === 'checkbox') {
    return (
      <div className="flex items-start gap-2">
        <input
          id={inputId}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(field.id, e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="mt-1 h-4 w-4 rounded border-border text-accent focus-visible:outline-accent"
          required={field.required}
        />
        <label htmlFor={inputId} className="text-sm text-text-secondary">
          {field.label}
        </label>
        {errorEl}
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <div>
        {label}
        <textarea
          id={inputId}
          rows={4}
          value={value || ''}
          onChange={(e) => onChange(field.id, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={baseClasses}
        />
        {errorEl}
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div>
        {label}
        <select
          id={inputId}
          value={value || ''}
          onChange={(e) => onChange(field.id, e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={baseClasses}
        >
          <option value="" disabled>
            انتخاب کنید
          </option>
          {(options || []).map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        {errorEl}
      </div>
    );
  }

  return (
    <div>
      {label}
      <input
        id={inputId}
        type={field.type}
        value={value || ''}
        onChange={(e) => onChange(field.id, e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={baseClasses}
      />
      {errorEl}
    </div>
  );
}
