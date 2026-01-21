/**
 * takayaso.com Tailwind Preset
 *
 * Usage in tailwind.config.js:
 *   import takayasoPreset from '@takayaso/tokens/preset'
 *   export default {
 *     presets: [takayasoPreset],
 *   }
 */

export default {
  theme: {
    extend: {
      colors: {
        // Background
        'bg-base': 'var(--color-bg-base)',
        'bg-surface': 'var(--color-bg-surface)',
        'bg-muted': 'var(--color-bg-muted)',
        'bg-subtle': 'var(--color-bg-subtle)',

        // Text
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        'text-inverse': 'var(--color-text-inverse)',

        // Border
        'border-default': 'var(--color-border-default)',
        'border-muted': 'var(--color-border-muted)',
        'border-subtle': 'var(--color-border-subtle)',

        // Interactive
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-text': 'var(--color-primary-text)',
        'secondary': 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'secondary-text': 'var(--color-secondary-text)',
        'secondary-border': 'var(--color-secondary-border)',
        'link': 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',

        // Status
        'success': 'var(--color-success)',
        'success-bg': 'var(--color-success-bg)',
        'success-border': 'var(--color-success-border)',
        'success-text': 'var(--color-success-text)',
        'warning': 'var(--color-warning)',
        'warning-bg': 'var(--color-warning-bg)',
        'warning-border': 'var(--color-warning-border)',
        'warning-text': 'var(--color-warning-text)',
        'error': 'var(--color-error)',
        'error-bg': 'var(--color-error-bg)',
        'error-border': 'var(--color-error-border)',
        'error-text': 'var(--color-error-text)',
        'info': 'var(--color-info)',
        'info-bg': 'var(--color-info-bg)',
        'info-border': 'var(--color-info-border)',
        'info-text': 'var(--color-info-text)',

        // Form
        'input-bg': 'var(--color-input-bg)',
        'input-border': 'var(--color-input-border)',
        'input-border-focus': 'var(--color-input-border-focus)',
        'input-placeholder': 'var(--color-input-placeholder)',
        'input-disabled-bg': 'var(--color-input-disabled-bg)',
      },

      // Gradient colors for bg-gradient-to-br from-xxx via-xxx to-xxx
      gradientColorStops: {
        'gradient-from': 'var(--color-bg-gradient-from)',
        'gradient-via': 'var(--color-bg-gradient-via)',
        'gradient-to': 'var(--color-bg-gradient-to)',
      },

      fontFamily: {
        sans: ['var(--font-sans)'],
      },

      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
      },

      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },

      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },

      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
      },

      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },

      zIndex: {
        'dropdown': 'var(--z-dropdown)',
        'modal': 'var(--z-modal)',
        'toast': 'var(--z-toast)',
      },
    },
  },
}
