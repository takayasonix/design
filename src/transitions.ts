/**
 * Transition tokens
 * Based on takayaso.com design system
 *
 * Principle: Subtle, short animations (0.2-0.3s) with ease-out
 */
export const transitionDuration = {
  // Fast - color changes, hover states
  fast: '200ms',
  // Default - most transitions (shadows, transforms)
  DEFAULT: '300ms',
  // Slow - complex animations
  slow: '500ms',
  // Entrance - hero section, page load
  entrance: '1000ms',
} as const;

export const transitionTimingFunction = {
  // Default - natural deceleration (recommended)
  DEFAULT: 'ease-out',
  // Linear - constant speed
  linear: 'linear',
  // Ease in - acceleration (use sparingly)
  in: 'ease-in',
  // Ease in-out - smooth both ends
  inOut: 'ease-in-out',
} as const;

// Keyframe animation presets
export const keyframes = {
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  slideUp: {
    from: { opacity: '0', transform: 'translateY(20px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  scaleIn: {
    from: { opacity: '0', transform: 'scale(0.95)' },
    to: { opacity: '1', transform: 'scale(1)' },
  },
} as const;

export type TransitionDuration = typeof transitionDuration;
export type TransitionTimingFunction = typeof transitionTimingFunction;
export type Keyframes = typeof keyframes;
