/**
 * Design System Tokens
 *
 * Usage:
 *   import { colors, spacing, fontSize } from '@design/tokens';
 *   import '@design/tokens/css'; // for CSS variables
 */

// Colors
import { colors } from './colors';
export { colors };
export type { Colors } from './colors';

// Typography
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} from './typography';
export { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing };
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
} from './typography';

// Spacing
import { spacing, borderRadius, borderWidth } from './spacing';
export { spacing, borderRadius, borderWidth };
export type { Spacing, BorderRadius, BorderWidth } from './spacing';

// Shadows
import { boxShadow } from './shadows';
export { boxShadow };
export type { BoxShadow } from './shadows';

// Transitions
import { transitionDuration, transitionTimingFunction } from './transitions';
export { transitionDuration, transitionTimingFunction };
export type { TransitionDuration, TransitionTimingFunction } from './transitions';

// Breakpoints
import { breakpoints, container } from './breakpoints';
export { breakpoints, container };
export type { Breakpoints, Container } from './breakpoints';

// All tokens as a single object
export const tokens = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  borderWidth,
  boxShadow,
  transitionDuration,
  transitionTimingFunction,
  breakpoints,
  container,
} as const;

export type Tokens = typeof tokens;
