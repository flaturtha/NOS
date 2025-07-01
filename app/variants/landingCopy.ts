// Copy variants for landing pages, parsed from HEADER & SUBHEAD VARIANTS.md
// Usage: import { landingCopy } from './landingCopy';

export type LandingCopyVariant = '33bt' | '34bt' | '34tb';

export const landingCopy: Record<LandingCopyVariant, { headline: string; subhead: string }> = {
  '33bt': {
    headline: 'More thrilling than Sherlock, yet nearly lost to history.',
    subhead: 'Best mysteries you\'ve never read',
  },
  '34bt': {
    headline: '"Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I\'m hooked on these forgotten classics."',
    subhead: 'Best mysteries you\'ve never read!',
  },
  '34tb': {
    headline: '"Reading these stories felt like uncovering buried treasure. As a lifelong Christie fan, I\'m hooked on these forgotten classics."',
    subhead: 'Best mysteries you\'ve never read!',
  },
}; 