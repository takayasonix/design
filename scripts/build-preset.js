const fs = require('fs');
const path = require('path');

/**
 * Generate Tailwind Preset from CSS Variables
 */

const preset = `/**
 * takayaso.com Tailwind Preset
 * Auto-generated - uses CSS variables from tokens.css
 *
 * Usage:
 *   import takayasoPreset from '@takayaso/tokens/preset'
 *   export default { presets: [takayasoPreset] }
 */

export default {
  theme: {
    extend: {
      colors: {
        // Semantic colors (use CSS variables)
        'bg-base': 'var(--color-background-light)',
        'bg-dark': 'var(--color-background-dark)',
        'text-primary': 'var(--color-foreground-light)',
        'text-inverse': 'var(--color-foreground-dark)',

        // Gray scale
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },

        // Status colors
        success: {
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success)',
          dark: 'var(--color-success-dark)',
        },
        warning: {
          light: 'var(--color-warning-light)',
          DEFAULT: 'var(--color-warning)',
          dark: 'var(--color-warning-dark)',
        },
        error: {
          light: 'var(--color-error-light)',
          DEFAULT: 'var(--color-error)',
          dark: 'var(--color-error-dark)',
        },

        // Brand colors
        brand: {
          twitter: 'var(--color-brand-twitter)',
          instagram: 'var(--color-brand-instagram)',
          note: 'var(--color-brand-note)',
          github: 'var(--color-brand-github)',
        },
      },

      fontFamily: {
        sans: ['var(--font-family-sans)'],
        mono: ['var(--font-family-mono)'],
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
      },

      transitionDuration: {
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration)',
        slow: 'var(--duration-slow)',
      },

      transitionTimingFunction: {
        DEFAULT: 'var(--ease)',
        linear: 'var(--ease-linear)',
        in: 'var(--ease-in)',
        'in-out': 'var(--ease-inOut)',
      },
    },
  },
}
`;

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'preset.js'), preset);
console.log('Generated dist/preset.js');
