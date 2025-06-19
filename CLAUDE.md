# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **project specification repository** for a professional marketing agency website for "Wedid" - a Luxembourg-based digital marketing agency. Currently contains only planning documents; no code implementation exists yet.

## Project Specifications

### Technology Stack (Planned)
- **Frontend**: Next.js 15+ with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4+ with custom design system
- **Animations**: Framer Motion
- **Hosting**: Vercel (optimized for Next.js)
- **Performance**: Target Lighthouse 90+ scores, sub-2 second load times

### Key Requirements
- **Multi-language**: French (primary), English/German versions planned
- **Mobile-first**: Responsive design for Luxembourg market
- **SEO-focused**: Local Luxembourg optimization, lead generation
- **Performance-critical**: Core Web Vitals optimization essential

## Design System

The project includes a comprehensive design system specification in `spec/website.md`:

### Color Palette
```css
--color--midnight-purple: #211056    /* Primary corporate color */
--color--brand: #d1f383              /* Signature green for CTAs */
--color--heading-color: #111          /* Black for headings */
--color--body-color: #474747          /* Gray for body text */
```

### Typography
- **Headings**: "Bdogrotesk Bf 648 A 656 Fd 543 A", "Times New Roman", sans-serif
- **Body**: Inter, sans-serif
- **Responsive**: Desktop (70px h1) → Tablet (50px) → Mobile (28px)

### Containers
- `.container-large`: max-width 1630px
- `.container`: max-width 1320px  
- `.container-medium`: max-width 1300px
- `.container-small`: max-width 598px

## Project Initialization Commands

When starting development, run these commands in order:

```bash
# Initialize Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --eslint --app

# Install additional dependencies
npm install framer-motion

# Configure Tailwind with custom design system variables
# (Add CSS variables from spec/website.md to globals.css)
```

## Development Workflow

### File Structure (When Implemented)
```
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── styles/             # CSS and design system files
│   ├── globals.css     # CSS variables and reset
│   └── components/     # Component-specific styles
├── public/             # Static assets
└── spec/               # Project specifications (current)
```

### Build Commands (When Project Exists)
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run type-check   # TypeScript checking
```

## Important Notes

- **Current Status**: Specification phase only - no code exists yet
- **Target Market**: Luxembourg SMEs and startups (high-end business audience)
- **Budget**: €8,000-€15,000 development budget indicated
- **Timeline**: 8-week development phases planned
- **Compliance**: GDPR requirements, Luxembourg business standards

## Specification Document

Complete project requirements, design system, and technical specifications are detailed in:
- `spec/website.md` (French language, 660+ lines of comprehensive specs)

This document includes complete color palettes, typography scales, component specifications, content strategy, SEO requirements, and technical architecture for the full website implementation.