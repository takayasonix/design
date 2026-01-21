/**
 * Typography tokens
 * Based on takayaso.com design system
 *
 * Primary: Lato (Latin) + Noto Sans JP (Japanese)
 */
export const fontFamily = {
  sans: [
    'Lato',
    'Noto Sans JP',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'sans-serif',
  ],
  mono: [
    'Lato',
    'monospace',
  ],
} as const;

export const fontSize = {
  // Extra small - used for timestamps, labels
  xs: '0.75rem',     // 12px
  // Small - secondary text
  sm: '0.875rem',    // 14px
  // Base - body text
  base: '1rem',      // 16px
  // Large - emphasized body, h3
  lg: '1.125rem',    // 18px
  // Extra large - h2
  xl: '1.25rem',     // 20px
  // 2x large - h1 mobile
  '2xl': '1.5rem',   // 24px
  // 3x large - h1 desktop
  '3xl': '1.875rem', // 30px
  // Display sizes (rarely used)
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
} as const;

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
} as const;

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
export type FontWeight = typeof fontWeight;
export type LineHeight = typeof lineHeight;
export type LetterSpacing = typeof letterSpacing;
