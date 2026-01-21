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

  // ============================================
  // Interactive Elements
  // ============================================

  // Button colors
  button: {
    // Primary: Main actions (グレースケール中心)
    primary: {
      bg: '#171717',           // gray-900
      bgHover: '#262626',      // gray-800
      bgActive: '#404040',     // gray-700
      text: '#ffffff',
      border: '#171717',
    },
    // Secondary: Sub actions
    secondary: {
      bg: '#ffffff',
      bgHover: '#f5f5f5',      // gray-100
      bgActive: '#e5e5e5',     // gray-200
      text: '#171717',         // gray-900
      border: '#d4d4d4',       // gray-300
    },
    // Ghost: Minimal style
    ghost: {
      bg: 'transparent',
      bgHover: '#f5f5f5',      // gray-100
      bgActive: '#e5e5e5',     // gray-200
      text: '#171717',         // gray-900
      border: 'transparent',
    },
    // Outline: Border emphasis
    outline: {
      bg: 'transparent',
      bgHover: '#171717',      // gray-900
      bgActive: '#262626',     // gray-800
      text: '#171717',         // gray-900
      textHover: '#ffffff',
      border: '#171717',       // gray-900
    },
    // Destructive: Dangerous actions
    destructive: {
      bg: '#ef4444',           // red-500
      bgHover: '#dc2626',      // red-600
      bgActive: '#b91c1c',     // red-700
      text: '#ffffff',
      border: '#ef4444',
    },
    // Disabled state (共通)
    disabled: {
      bg: '#e5e5e5',           // gray-200
      text: '#a3a3a3',         // gray-400
      border: '#e5e5e5',       // gray-200
    },
  },

  // Link colors
  link: {
    DEFAULT: '#171717',        // gray-900
    hover: '#525252',          // gray-600
    active: '#404040',         // gray-700
    visited: '#737373',        // gray-500
    // Accent link (目立たせたい場合)
    accent: '#2563eb',         // blue-600
    accentHover: '#1d4ed8',    // blue-700
  },

  // Form elements
  form: {
    // Input/Textarea
    inputBg: '#ffffff',
    inputBgDisabled: '#f5f5f5',      // gray-100
    inputBorder: '#d4d4d4',          // gray-300
    inputBorderHover: '#a3a3a3',     // gray-400
    inputBorderFocus: '#171717',     // gray-900
    inputBorderError: '#ef4444',     // red-500
    inputText: '#171717',            // gray-900
    inputTextDisabled: '#a3a3a3',    // gray-400
    inputPlaceholder: '#a3a3a3',     // gray-400
    // Checkbox/Radio
    checkboxBg: '#ffffff',
    checkboxBgChecked: '#171717',    // gray-900
    checkboxBorder: '#d4d4d4',       // gray-300
    checkboxBorderChecked: '#171717',
    checkboxCheck: '#ffffff',
    // Select
    selectArrow: '#525252',          // gray-600
    // Focus ring
    focusRing: '#171717',            // gray-900
    focusRingOffset: '#ffffff',
  },

  // ============================================
  // Text colors
  // ============================================
  text: {
    primary: '#171717',        // gray-900 (メイン)
    secondary: '#525252',      // gray-600 (サブ)
    muted: '#737373',          // gray-500 (控えめ)
    disabled: '#a3a3a3',       // gray-400 (無効)
    inverse: '#ffffff',        // 反転テキスト
    // On dark background
    onDark: {
      primary: '#ededed',
      secondary: '#a3a3a3',
      muted: '#737373',
    },
  },

  // ============================================
  // Border colors
  // ============================================
  border: {
    DEFAULT: '#e5e5e5',        // gray-200 (標準)
    strong: '#d4d4d4',         // gray-300 (強調)
    muted: '#f5f5f5',          // gray-100 (控えめ)
    dark: '#404040',           // gray-700 (ダーク)
  },

  // ============================================
  // Surface colors (cards, panels, etc.)
  // ============================================
  surface: {
    DEFAULT: '#ffffff',
    raised: '#ffffff',         // 浮き上がったカード
    sunken: '#fafafa',         // 沈んだエリア (gray-50)
    overlay: 'rgba(0, 0, 0, 0.5)',  // モーダル背景
    // Dark mode
    dark: {
      DEFAULT: '#0a0a0a',
      raised: '#171717',
      sunken: '#000000',
    },
  },

  // ============================================
  // Status/Feedback colors
  // ============================================
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
    bg: '#f0fdf4',         // green-50
  },
  warning: {
    light: '#fde047',
    DEFAULT: '#eab308',
    dark: '#ca8a04',
    bg: '#fefce8',         // yellow-50
  },
  error: {
    light: '#fca5a5',
    DEFAULT: '#ef4444',
    dark: '#dc2626',
    bg: '#fef2f2',         // red-50
  },
  info: {
    light: '#93c5fd',      // blue-300
    DEFAULT: '#3b82f6',    // blue-500
    dark: '#2563eb',       // blue-600
    bg: '#eff6ff',         // blue-50
  },

  // Base
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type Colors = typeof colors;
