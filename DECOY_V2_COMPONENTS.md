# Decoy Offer V2 Components - Implementation Summary

## Overview
Created new Hormozi-style decoy offer landing page components with "_v2" suffix to avoid overwriting existing components.

## Components Created

### 1. HeroDecoy_v2.tsx
- **Purpose**: Hero section with equal visual weight for both options
- **Features**:
  - Yellow box with ad variant text (matches existing system)
  - Hero image (matches existing system)
  - Main headline: "Get Your First Bradys Mystery Novel"
  - Subhead: "THE BRADYS AND THE CHINESE IDOL — A complete 1903 detective mystery — professionally restored and ready to read."
  - Two CTA buttons with equal visual weight:
    - Collection: "🔥 Get the Complete 10-Book Collection - $49.99" (with "BEST VALUE" badge)
    - Single PDF: "📘 Single PDF Novel - $6.99"
  - Trust line: "Instant delivery · DRM-free · Read on any device"
- **Layout**: Desktop side-by-side, mobile stacked, collection on top

### 2. OptionComparison_v2.tsx
- **Purpose**: Detailed side-by-side comparison showing premium dominance
- **Features**:
  - Two-column layout (desktop) / stacked cards (mobile)
  - Single PDF option (left/top): Shows benefits and tradeoffs with ❌ marks
  - Collection option (right/bottom): Shows benefits, bonuses, and math with ✅ and 🎁 marks
  - "MOST POPULAR" badge on collection
  - Clear visual hierarchy with collection having subtle background emphasis
  - CTA buttons with different styling (secondary vs primary)

### 3. BeforeAfter_v2.tsx
- **Purpose**: Show transformation quality
- **Features**:
  - Section headline: "See the Transformation"
  - Placeholder for before/after image (needs actual image)
  - "Before" and "After" text sections
  - Closing tagline about editorial experience

### 4. SocialProof_v2.tsx
- **Purpose**: Customer testimonials
- **Features**:
  - Section headline: "What Readers Say About These Restorations"
  - Three 5-star testimonials with existing customer photos
  - Updated testimonial text to match new copy
  - Grid layout (desktop) / stacked (mobile)

### 5. WhyComparison_v2.tsx
- **Purpose**: Explain why collection is smarter choice
- **Features**:
  - Section headline: "Why the Collection is the Smarter Choice"
  - Five comparison points: Better formats, economics, protection, convenience, mission impact
  - "The reality" closing statement
  - Single column layout for readability

### 6. FinalCTA_v2.tsx
- **Purpose**: Final conversion section with clear hierarchy
- **Features**:
  - Section headline: "The Mission Needs You"
  - Mission statement copy
  - Two CTA buttons with clear hierarchy:
    - Primary (larger): Collection with "RECOMMENDED" badge
    - Secondary (smaller): Single PDF
  - Desktop side-by-side, mobile stacked

### 7. Updated Landing Page Routes
- **Purpose**: All existing landing page routes now use v2 components
- **Updated Routes**:
  - `/31tbe` - Uses '31TB' variant ("I meant to read one. Ended up tearing through five.")
  - `/32tbe` - Uses '32TB' variant ("It's like Sherlock Holmes had a street-wise American cousin.")
  - `/31bte` - Uses '31BT' variant ("I meant to read one. Ended up tearing through five.")
  - `/32bte` - Uses '32BT' variant ("It's like Sherlock Holmes had a street-wise American cousin.")
  - `/37tbe` - Uses '37TB' variant ("Murder. Opium. And a butler who definitely didn't do it.")
- **Features**:
  - Uses existing hooks (scroll tracking, exit intent)
  - Ad variant support for each route
  - Handles both collection and single PDF clicks
  - Integrates with existing modals and popups
  - Mobile sticky CTA defaults to collection

## Design Principles Followed

### Hormozi Decoy Offer Best Practices
✅ Side-by-side presentation on desktop  
✅ Equal visual weight for both options in hero  
✅ Premium option (collection) positioned first/left on desktop, top on mobile  
✅ Clear asymmetric dominance in comparison section  
✅ Decoy clearly inferior on decisive attributes  

### Mobile-First Design
✅ 97% of users are 65+ on mobile devices  
✅ Button min-height: 56px for easier tapping  
✅ Generous spacing and readable text  
✅ Stacked layout on mobile with collection on top  

### Existing Site Integration
✅ Maintains existing color scheme and fonts  
✅ Uses existing ad variant system  
✅ Integrates with existing hooks and modals  
✅ Preserves existing layout structure  

## Technical Implementation

### File Naming
- All components end with "_v2" suffix
- No existing files overwritten
- Easy to cherry-pick content later

### Responsive Design
- Mobile-first approach
- Desktop: Side-by-side layouts where appropriate
- Mobile: Stacked layouts with collection prioritized
- Consistent spacing and typography

### Button Styling
- **Hero Section**: Equal weight, same height (min 56px)
- **Comparison Section**: Hierarchy (secondary vs primary)
- **Final CTA**: Clear size difference (20% larger for collection)

### Color Usage
- Yellow box: Existing yellow/amber
- Primary CTA: Existing red-600
- Secondary CTA: Existing gray-600
- Badges: Yellow-400 for "BEST VALUE", red-600 for "MOST POPULAR"

## Usage

### Access the New Landing Pages
- URLs: `/31tbe`, `/32tbe`, `/31bte`, `/32bte`, `/37tbe`
- Each route uses its specific ad variant automatically
- All routes now feature the Hormozi-style decoy offer layout

### Integration Points
- Uses existing GHL form modal
- Integrates with existing exit intent popups
- Uses existing scroll tracking hooks
- Maintains existing mobile sticky CTA

## Next Steps

1. **Add Before/After Image**: Replace placeholder in BeforeAfter_v2.tsx
2. **Test on Mobile**: Verify all buttons are easily tappable
3. **A/B Test**: Compare against existing landing page
4. **Analytics**: Track conversion rates for both options
5. **Copy Refinement**: Adjust copy based on performance data

## Files Created/Updated
- `/app/components/HeroDecoy_v2.tsx` (new)
- `/app/components/OptionComparison_v2.tsx` (new)
- `/app/components/BeforeAfter_v2.tsx` (new)
- `/app/components/SocialProof_v2.tsx` (new)
- `/app/components/WhyComparison_v2.tsx` (new)
- `/app/components/FinalCTA_v2.tsx` (new)
- `/app/routes/31TBe.tsx` (updated)
- `/app/routes/32TBe.tsx` (updated)
- `/app/routes/31BTe.tsx` (updated)
- `/app/routes/32BTe.tsx` (updated)
- `/app/routes/37TBe.tsx` (updated)
- `/DECOY_V2_COMPONENTS.md` (this file)
