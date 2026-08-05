export default function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`rounded-theme border border-border bg-surface p-6 shadow-theme ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
