Tales of Murder Press – Full Visual Style Guide

Color Palette

Primary: #8B0000, Charcoal: #242424, Cream BG: #FAF3E0, CTA Blue: #003366, Accent Sepia: #A6895B.

Typography

Libre Baskerville (headings), Playfair Display (optional), IBM Plex Sans (body). Font size: 18px+, Line height: 1.7.

Buttons

Primary = deep red background, Secondary = bordered cream. Large, contrasty, mobile-friendly with hover
states.

Layout & Spacing

12-col grid, 8pt rhythm. Text max width: 680px. Generous vertical spacing and button separation.

Imagery

Pen & ink art, photo-realistic mockups, vintage covers. Atticus used sparingly but playfully.

Mobile UX

Sticky CTA, large tap targets, MENU labeled nav, no hover-only interactions.

Trust & CTA

30-day guarantee, phone support line, testimonials, CTA examples like 'Claim My Mystery'.

TailwindCSS Snippet

/* === Tailwind Utility Extensions === */ @layer components { .btn-primary { @apply bg-[#8B0000]
text-white px-6 py-3 rounded-md text-lg font-semibold tracking-wide; } .btn-primary:hover { @apply
bg-[#5a0000]; } .btn-secondary { @apply border-2 border-[#8B0000] text-[#8B0000] bg-[#FAF3E0] px-6 py-3
rounded-md text-lg font-semibold; } .btn-secondary:hover { @apply bg-[#8B0000] text-white; }
.section-padding { @apply py-12 px-4 md:px-12; } .header-text { @apply text-[28px] md:text-[36px]
font-serif text-[#242424]; } .body-text { @apply text-[18px] font-sans leading-relaxed text-[#242424]; }
.trust-strip { @apply flex flex-col sm:flex-row justify-center gap-4 text-center mt-6 text-sm
text-[#242424]; } .atticus-icon { @apply w-10 h-10; } .cream-bg { @apply bg-[#FAF3E0]; } }

Base CSS Stylesheet

:root { --color-primary: #8B0000; --color-charcoal: #242424; --color-cream: #FAF3E0; --color-cta:
#003366; --color-accent: #A6895B; --font-heading: 'Libre Baskerville', Georgia, serif;
--font-subheading: 'Playfair Display', serif; --font-body: 'IBM Plex Sans', sans-serif;
--font-size-body: 18px; --font-size-heading: 28px; --line-height-body: 1.7; --button-radius: 6px; } body
{ background-color: var(--color-cream); color: var(--color-charcoal); font-family: var(--font-body);
font-size: var(--font-size-body); line-height: var(--line-height-body); } h1, h2, h3 { font-family:
var(--font-heading); color: var(--color-charcoal); } button.primary { background: var(--color-primary);
color: white; padding: 14px 24px; border: none; border-radius: var(--button-radius); font-family:
var(--font-heading); font-size: 1rem; cursor: pointer; } button.primary:hover { background: #5a0000; }
button.secondary { background: var(--color-cream); color: var(--color-primary); border: 2px solid
var(--color-primary); padding: 14px 24px; border-radius: var(--button-radius); } button.secondary:hover
{ background: var(--color-primary); color: white; }

ShadCN Button Component

// components/ui/button.tsx import * as React from "react"; import { cn } from "@/lib/utils"; export
interface ButtonProps extends React.ButtonHTMLAttributes { variant?: "primary" | "secondary"; } const
Button = React.forwardRef( ({ className, variant = "primary", ...props }, ref) => { const baseStyles =
"inline-flex items-center justify-center text-sm font-medium rounded-md transition-colors
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50
disabled:pointer-events-none h-10 px-6 py-3"; const variants = { primary: "bg-[#8B0000] text-white
hover:bg-[#5a0000] shadow-md font-semibold tracking-wide", secondary: "border-2 border-[#8B0000]
text-[#8B0000] bg-[#FAF3E0] hover:bg-[#8B0000] hover:text-white", }; return ( ); } ); Button.displayName
= "Button"; export { Button };

