import { useEffect } from 'react';
import theme from '../../data/theme.json';

/**
 * Reads theme.json and writes all values as CSS custom properties on
 * :root. Tailwind config maps its color/font/radius/shadow tokens to
 * these variables, so ALL styling in the app ultimately traces back to
 * this single JSON file — no hardcoded colors anywhere in components.
 */
export default function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    const { colors, typography, radius, shadow } = theme;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-text-primary', colors.textPrimary);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-error', colors.error);

    root.style.setProperty('--font-heading', typography.headingFont);
    root.style.setProperty('--font-body', typography.bodyFont);

    root.style.setProperty('--radius', radius);
    root.style.setProperty('--shadow', shadow);
  }, []);

  return children;
}
