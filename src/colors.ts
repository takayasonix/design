/**
 * Color tokens
 * Based on takayaso.com design system
 *
 * Design philosophy: Grayscale-centric, minimal accent colors
 */
export const colors = {
  // Gray scale (Tailwind default, main palette)
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Semantic / Theme colors
  background: {
    light: '#ffffff',
    dark: '#0a0a0a',
  },
  foreground: {
    light: '#171717',
    dark: '#ededed',
  },

  // Brand colors (for SNS links etc.)
  brand: {
    twitter: '#60a5fa',    // blue-400
    instagram: '#ec4899',  // pink-500
    note: '#22c55e',       // green-500
    github: '#404040',     // gray-700
  },

  // Semantic colors (for feedback/status)
  success: {
    light: '#86efac',
    DEFAULT: '#22c55e',
    dark: '#16a34a',
  },
  warning: {
    light: '#fde047',
    DEFAULT: '#eab308',
    dark: '#ca8a04',
  },
  error: {
    light: '#fca5a5',
    DEFAULT: '#ef4444',
    dark: '#dc2626',
  },

  // Base
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type Colors = typeof colors;
