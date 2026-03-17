# Yaxh-Folio

A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and reusable UI components.

## Overview

This project is a single-page portfolio site for Yaxhkumar Patel focused on cybersecurity and full-stack development. The homepage is composed of dedicated sections for:

- Hero
- About
- Experience
- Projects
- Education
- Certifications
- Skills
- Activities
- Contact

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui + Radix UI primitives
- Lucide React icons
- Vercel Analytics

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  hero-section.tsx
  about-section.tsx
  experience-section.tsx
  projects-section.tsx
  education-section.tsx
  certifications-section.tsx
  skills-section.tsx
  activities-section.tsx
  contact-section.tsx
  ui/
lib/
  utils.ts
public/
styles/
  globals.css
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Install

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Scripts

The project uses these scripts from package.json:

- dev: Starts Next.js in development mode
- build: Creates a production build
- start: Runs the production server
- lint: Runs ESLint

## Customize Content

Update content directly in section component files:

- Hero and social links: components/hero-section.tsx
- About: components/about-section.tsx
- Experience: components/experience-section.tsx
- Projects: components/projects-section.tsx
- Education: components/education-section.tsx
- Certifications: components/certifications-section.tsx
- Skills: components/skills-section.tsx
- Activities: components/activities-section.tsx
- Contact details and socials: components/contact-section.tsx

## Metadata and Branding

- Page metadata and title: app/layout.tsx
- Site icons: files in public/ referenced by app/layout.tsx

## Deployment

This project is ready to deploy on Vercel.

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Next.js and builds with the default settings.

If you do not want analytics, remove the Analytics import and component usage from app/layout.tsx.

## License

This project is for personal portfolio use.
