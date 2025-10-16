# Cursor AI Agent Prompt: Build New Decoy Offer Landing Page Components

## Overview

Create NEW components for a Hormozi-style decoy offer landing page for the Bradys mystery collection. DO NOT overwrite existing components \- create all new files with “\_v2” suffix so I can cherry-pick content from the old versions later, if necessary.

## Design Principles

1. Keep existing site layout structure and color scheme from current NOS repo

2. Mobile-first design (97% of users are 65+ on mobile devices)

3. Follow Alex Hormozi decoy offer best practices:

   * Side-by-side presentation on desktop

   * Equal visual weight for both options in hero

   * Premium option (collection) positioned first/left on desktop, top on mobile

   * Clear asymmetric dominance in comparison section

## Components to Create

### 1\. HeroDecoy\_v2.jsx or similar

**Requirements:** 

\- Yellow box at top with text: same as before, creating the variants as we already have to match ad copy.

\- hero image: same as before to match correct yellow box text

\- Main headline: “Get Your First Bradys Mystery Novel” 

\- Subhead: “THE BRADYS AND THE CHINESE IDOL \- A complete 1903 detective mystery — professionally restored and ready to read.” 

\- Section: “Choose Your Option:” 

\- TWO CTA buttons with equal visual weight: \- Button 1: “🔥 Get the Complete 10-Book Collection \- $49.99” (with subtext: “Buy 5, Get 5 Free — Only $4.99 each”) \[Use BEST VALUE badge or pill\] 

\- “OR” text between buttons \- Button 2: “📘 Single PDF Novel \- $6.99” 

\- Trust line below: “Instant delivery · DRM-free · Read on any device”

**Layout:** \- Desktop: Buttons side-by-side (collection left, single PDF right), both same height/prominence 

\- Mobile: Stacked vertically, full-width or 90% width, collection on top, 16-24px spacing, both same style \- Button min-height: 56px for easier tapping on mobile 

\- hero section layout should stay the same; only change the headline, make the two CTA buttons, and trust line

### 2\. OptionComparison\_v2.jsx or similar

**Requirements:** Two-column comparison (or stacked cards on mobile) with clear visual hierarchy showing premium dominance.

**Option 1 (Left/Top): Single PDF Novel** \- Header: “📘 OPTION 1: Single PDF Novel” \- Title: “The Bradys and the Chinese Idol” \- Price: “$6.99” with strikethrough “Regular $9.99” \- Section “What You Get:” with checkmarks (✅) \- Section “The Tradeoffs:” with X marks (❌) \- CTA button: Secondary/outlined style or muted color \- “Best for: Testing the waters with one story”

**Option 2 (Right/Bottom): Complete Collection** \- Badge at top: “MOST POPULAR” or “BEST VALUE” \- Header: “🔥 OPTION 2: Complete 10-Book Collection” \- Title: “All Ten Restored Bradys Mysteries” \- Price: “$49.99 — Buy 5, Get 5 Free” with subtext “(Only $4.99 per book vs $9.99 regular price)” \- Section “What You Get:” with checkmarks (✅) \- Section “Plus These Bonuses:” with gift icons (🎁) \- “The Math:” callout box showing savings calculation \- CTA button: Primary contrasting color, slightly larger/emphasized \- “Best for: Readers who want the best value, mobile-friendly formats, and maximum impact on the preservation mission”

**Layout:** \- Desktop: True side-by-side, equal width columns \- Mobile: Stacked cards, collection card first (top) \- Add subtle shadow/border to make cards distinct \- Premium card should have slight visual emphasis (maybe subtle color background or stronger border)

### 3\. BeforeAfter\_v2.jsx or similar

**Requirements:** \- Section headline: “See the Transformation” \- Image comparison component (before/after image should be provided) \- Text under “Before:” \- Text under “After:” \- Closing tagline

**Layout:** \- Desktop: Image left, text right OR full-width image with text below \- Mobile: Image full-width, text stacked below \- Make image prominent and easy to see differences

### 4\. SocialProof\_v2.jsx or similar

**Requirements:** \- Section headline: “What Readers Say About These Restorations” \- Three 5-star testimonials (⭐⭐⭐⭐⭐) \- Each testimonial should have visual star rating and quote text

**Layout:** \- Desktop: Three columns \- Mobile: Stacked, full-width cards \- Add subtle styling to make testimonials stand out

USE TESTIMONIALS FROM PREVIOUS, INCLUDING NAMES & IMAGES 

### 5\. GuaranteeSection\_v2.jsx or similar

**Requirements:** \- Section headline: “Protected by the Reader’s Honor Guarantee” \- Subhead: “🛡️ Collection Purchases are 100% Risk-Free” \- Guarantee copy \- Disclaimer in smaller/italic text about single PDF being final sale

**Layout:** \- Centered content, max-width for readability \- Shield icon (🛡️) should be prominent \- Consider subtle background color or border to make section distinct

DO NOT CHANGE OR CREATE NEW. USE ORIGINAL GuaranteeSection.jsx

### 6\. FAQ\_v2.jsx or similar

**Requirements:** \- Section headline: “Your Questions Answered” \- 6 FAQ items with questions and answers \- Accordion or always-expanded format (your choice based on mobile UX)

**Layout:** \- Desktop: Single column, max-width for readability \- Mobile: Same, full-width \- Clear visual separation between Q\&A pairs

DO NOT CHANGE OR CREATE NEW. USE ORIGINAL FAQ.jsx

### 7\. FinalCTA\_v2.jsx or similar

**Requirements:** \- Section headline: “The Mission Needs You” \- Mission statement copy \- Two CTA buttons with hierarchy: \- Primary (larger): “🔥 Complete 10-Book Collection \- $49.99” with “RECOMMENDED” badge/arrow \- Secondary (smaller): “📘 Single PDF Novel \- $6.99”

**Layout:** \- Desktop: Centered, buttons side-by-side with clear size difference \- Mobile: Stacked, collection button larger/more prominent

### 8\. WhyComparison\_v2.jsx or similar

**Requirements:** \- Section headline: “Why the Collection is the Smarter Choice” \- Introductory paragraph \- Five comparison points with bold headers and explanatory text: \- Better formats \- Better economics \- Better protection \- Better convenience \- Better mission impact \- Closing “reality” statement

**Layout:** \- Single column for readability \- Bold headers for each comparison point \- Consider icons or visual separators between points

## Technical Requirements

### Responsive Breakpoints as before

Button Styling Guidelines

**Hero Section (Equal Weight):** \- Both buttons: Solid, contrasting colors from existing palette \- Same height (min 56px) \- Desktop: Side-by-side with small gap (16-24px) \- Mobile: Stacked, full-width, 16-24px vertical spacing

**Comparison Section (Hierarchy):** \- Single PDF: Secondary/outlined button or muted color \- Collection: Primary contrasting button, slightly larger or bolder

**Final CTA (Hierarchy):** \- Collection: Larger (maybe 20% bigger), primary color \- Single PDF: Smaller, secondary style

### Color Usage

* Use existing NOS site colors

* Yellow box: Keep yellow/amber from current design

* Primary CTA: Use current primary button color

* Secondary CTA: Use current secondary/outlined button style

* Badges (“MOST POPULAR”, “BEST VALUE”): Accent color or complementary color

### Typography

* Keep existing font stack

* Maintain current heading hierarchy (h1, h2, h3)

* Ensure minimum 16px body text for 65+ readability

* Good contrast ratios for accessibility

### Spacing

* Generous whitespace between sections (64-96px desktop, 48-64px mobile)

* Consistent internal padding in cards/sections

* Don’t cram content \- this audience needs breathing room

## File Naming Convention

All new components should end in “\_v2” so they don’t overwrite existing files: \- HeroDecoy\_v2.jsx \- OptionComparison\_v2.jsx \- BeforeAfter\_v2.jsx \- etc.

## What I’ll Provide Separately

* Final landing page copy (I’ll paste this in after components are built)

* Before/after comparison image

* Any specific color hex codes if needed

## Testing Checklist

After building, ensure: 1\. ✅ Mobile displays buttons stacked vertically with equal visual weight 2\. ✅ Desktop displays side-by-side appropriately 3\. ✅ All CTAs are easily tappable on mobile (min 56px height) 4\. ✅ Content is readable on small screens without horizontal scrolling 5\. ✅ Comparison section clearly shows premium dominance 6\. ✅ Yellow box is visible and prominent but not overwhelming 7\. ✅ All new files have “\_v2” suffix

Please build these components following Hormozi decoy offer best practices while maintaining the existing NOS site’s visual identity and layout structure.