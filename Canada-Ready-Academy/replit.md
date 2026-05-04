# Canada Ready Academy

## Overview

Full-stack bilingual (English + Arabic) website for Canada Ready Academy — an online education platform helping Arabic-speaking newcomers in Canada improve English, get job-ready, and settle with confidence.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui
- **Routing**: wouter
- **Forms**: react-hook-form + zod
- **Animations**: framer-motion
- **Email**: nodemailer (optional SMTP)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Artifacts

- **Canada Ready Academy** (`artifacts/canada-ready`) — React+Vite frontend at `/`
- **API Server** (`artifacts/api-server`) — Express 5 backend at `/api`

## Features

- Bilingual English/Arabic with RTL support
- Language toggle in navbar
- 7 pages: Home, About, Programs, How It Works, Free Assessment, Testimonials, Contact
- Assessment booking form (stores in DB, sends email notification)
- Contact form (stores in DB, sends email notification)
- WhatsApp floating button + CTA sections
- 4 pricing plans: Starter $79, Premium $129, Career Boost $179, Canada Ready $249
- Mobile-first responsive design

## Database Tables

- `assessments` — Free assessment form submissions
- `contacts` — Contact form submissions

## Email Notifications

Set these environment variables to enable email notifications when someone signs up:
- `SMTP_USER` — Gmail address (e.g. yourname@gmail.com)
- `SMTP_PASS` — Gmail App Password (not your regular password)
- `NOTIFY_EMAIL` — Where to receive notifications

## WhatsApp

Update the WhatsApp number in the frontend components by searching for the placeholder `+1-587-000-0000` and replacing with your real number.
