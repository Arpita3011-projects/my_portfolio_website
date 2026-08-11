export const colors = {
  background: '#f8fafc',
  surface: '#ffffff',
  surfaceElevated: '#f8fafc',
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textMuted: '#64748b',
  accent: '#2563eb',
  accentHover: '#1d4ed8',
  accentSoft: 'rgba(37, 99, 235, 0.12)',
  // Subtle secondary accent used sparingly for highlights/badges
  secondary: '#0ea5a4',
  secondaryHover: '#0b9a98',
  secondarySoft: 'rgba(14, 165, 164, 0.08)',
  border: '#e2e8f0',
  success: '#16a34a',
  warning: '#d97706',
  danger: '#dc2626',
}

export const spacing = {
  0: '0px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
}

export const borderRadius = {
  none: '0px',
  sm: '0.375rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
}

export const shadows = {
  sm: '0 1px 2px rgba(15, 23, 42, 0.04)',
  md: '0 10px 30px rgba(15, 23, 42, 0.08)',
  lg: '0 20px 45px rgba(15, 23, 42, 0.12)',
  glow: '0 0 0 1px rgba(37, 99, 235, 0.1), 0 8px 30px rgba(37, 99, 235, 0.12)',
}

export const transitions = {
  fast: '150ms ease-in-out',
  base: '250ms ease-in-out',
  slow: '400ms ease-in-out',
}

const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
}

export default theme
