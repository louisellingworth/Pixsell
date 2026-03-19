# Pixsell Games — Marketing Website

Static marketing site for Pixsell Games, a publisher helping Western game developers enter the Chinese market. Built with Next.js 14 and exported as a fully-static site for cPanel hosting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.1.0 (App Router) |
| UI Library | React 18.2.0 |
| Language | TypeScript 5.2.2 (strict mode) |
| Styling | Tailwind CSS 3.3.3 |
| Animation | Framer Motion 12.1.0 |
| 3D / Complex animation | GSAP 3.12.7 |
| Icons | Heroicons 2.2.0 |
| Performance monitoring | web-vitals 5.0.3 |
| Service worker | Workbox 7.0.0 |
| Testing | Jest 29 + React Testing Library 14 |

---

## Getting Started

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

---

## Build & Deploy

```bash
npm run build
```

This produces a static export in the `/out` directory. Upload the contents of `/out` to your cPanel `public_html` folder.

For a full optimised production build (image compression, critical CSS, hreflang):

```bash
npm run build:full-optimized
```

---

## Project Structure

```
app/
├── __tests__/           # Jest test files
│   ├── components/      # Component tests
│   ├── hooks/           # Hook tests
│   ├── lib/             # Library tests
│   └── utils/           # Utility tests
├── api/
│   ├── analytics/       # Performance metrics endpoint
│   └── survey/          # Survey form submission endpoint
├── components/
│   ├── market/          # Home page section sub-components
│   │   ├── HeroSection.tsx
│   │   ├── CoPublishingWorks.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/              # Reusable UI primitives
│   └── MarketContent.tsx   # Home page orchestrator (thin wrapper)
├── hooks/               # Custom React hooks
├── lib/
│   ├── analytics.ts     # Event tracking + web vitals batching
│   ├── animation-variants.ts  # Shared Framer Motion variants
│   ├── config.ts        # Site-wide config
│   ├── market-data.ts   # Data for home page sections
│   └── serviceWorker.ts # Service worker registration
├── services/            # Individual service pages
├── blog/                # Blog post pages
├── utils/
│   ├── cn.ts            # Tailwind class merging (clsx + tailwind-merge)
│   ├── imageOptimization.ts
│   └── performance.ts   # debounce, throttle, executeInChunks, etc.
└── globals.css          # Global styles and keyframe animations
```

---

## Key Architectural Decisions

**Static export** — `output: 'export'` in `next.config.js` means no Node.js server is needed at runtime. All pages are pre-rendered to HTML at build time.

**`'use client'` boundary** — All interactive components (animations, hooks) are client components. Server components are used for static pages.

**`@/*` path alias** — `@/components/Foo` resolves to `app/components/Foo`. Defined in `tsconfig.json`.

**`app/utils/cn.ts`** — Single source of truth for Tailwind class merging. Do not import from `app/lib/utils.ts` (deleted — was a duplicate).

**Analytics batching** — Web Vitals are queued for 2 seconds and sent as a batch to `/api/analytics/performance`, with up to 2 retries on failure.

**No lodash** — `debounce` and `throttle` are implemented natively in `app/utils/performance.ts`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production static export to `/out` |
| `npm run start` | Start production server (requires Node.js) |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run analyze` | Open bundle analyser |
| `npm run optimize:performance` | Run full 8-step build optimisation pipeline |
| `npm run build:complete` | Build + add hreflang tags |
| `npm run build:full-optimized` | Full optimised build (images, CSS, compression) |

---

## Testing

```bash
npm test                # Run all tests once
npm run test:watch      # Re-run tests on file change
npm run test:coverage   # Generate HTML coverage report in /coverage
```

Test files live in `app/__tests__/` and mirror the `app/` directory structure. All component tests mock `framer-motion` and `next/link` to keep tests focused and fast.

---

## Code Conventions

- **TypeScript strict mode** — no implicit `any`, all props typed.
- **Hook filenames** — camelCase, e.g. `useIsMobile.ts`, `useIntersectionObserver.ts`.
- **Component filenames** — PascalCase, e.g. `HeroSection.tsx`.
- **Class merging** — always use `cn()` from `@/utils/cn` for conditional Tailwind classes.
- **Data constants** — page-level data (arrays, types) lives in `app/lib/market-data.ts`, not inline in components.
- **Animation variants** — Framer Motion variants live in `app/lib/animation-variants.ts`.

---

## Deployment Notes

See `DEPLOYMENT.md` and `cPanel-Upload-Instructions.md` for detailed deployment steps.

The site is optimised for cPanel shared hosting:
- Static HTML output — no server required
- Pre-compressed assets (gzip + brotli)
- Cache headers defined in `cache-config.js`
- Service worker for offline support
