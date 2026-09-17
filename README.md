# KrishiSetu

AI-powered market-linkage and price-discovery platform for farmers.

KrishiSetu helps a farmer decide **where** to sell, **when** to sell and **to whom**
to sell, optimising for **expected net realisation** rather than the highest listed
price.

> **Current phase: Phase 0 - Project Foundation (in progress).**
> Only the monorepo skeleton, tooling and documentation exist. No business features
> are implemented. See [PROJECT_STATUS.md](./PROJECT_STATUS.md).

## Architecture overview

```
Web App (React)        Mobile App (Expo)
        \                    /
         \                  /
          Shared Backend API (Express)
                    |
   +-------+--------+--------+--------------+
   |       |        |        |              |
MongoDB   AI    Market    Buyer     Logistics / Storage
services   data  matching        Payments, Blockchain audit
```

Everything below the backend line is planned for later phases. The backend is the
source of truth for business logic; important numerical calculations are
deterministic backend code, never LLM output.

## Tech stack

| Area         | Stack                                            |
| ------------ | ------------------------------------------------ |
| Web          | React, TypeScript, Vite, Tailwind CSS            |
| Mobile       | React Native, Expo, TypeScript                   |
| Backend      | Node.js, Express, TypeScript                     |
| Tooling      | npm workspaces, ESLint, Prettier, Vitest         |
| Later phases | MongoDB + Mongoose, Clerk, AI services, payments |

## Monorepo structure

```
.
├── apps/
│   ├── web/              React + TS + Vite + Tailwind (placeholder UI)
│   └── mobile/           Expo + TS (placeholder screen)
├── backend/              Express + TS API (GET /api/health only)
├── packages/
│   ├── types/            shared domain types (stub)
│   ├── validation/       shared validation schemas (stub)
│   ├── api-client/       shared API client (stub)
│   └── constants/        shared constants (stub)
├── contracts/            future API / smart-contract interfaces
├── docs/                 project documentation
└── .github/workflows/    CI
```

## Local setup

Requirements: Node.js >= 20 and npm.

```bash
git clone https://github.com/LakshyaPhoolwani/KrishiSetu.git
cd KrishiSetu
npm install          # installs all workspaces
cp .env.example .env # optional; defaults work for Phase 0
```

## Development commands

Run from the repository root:

| Command               | What it does                                      |
| --------------------- | ------------------------------------------------- |
| `npm run dev`         | Backend + web app together                        |
| `npm run dev:backend` | Backend only (http://localhost:4000)              |
| `npm run dev:web`     | Web app only (http://localhost:5173)              |
| `npm run dev:mobile`  | Expo dev server for the mobile app                |
| `npm run build`       | Build every workspace that defines a build script |
| `npm run test`        | Run all workspace tests                           |
| `npm run typecheck`   | TypeScript checks across all workspaces           |
| `npm run lint`        | ESLint across the repository                      |
| `npm run format`      | Prettier write (`npm run format:check` to verify) |

Verify the backend:

```bash
curl http://localhost:4000/api/health
# {"status":"ok","service":"krishisetu-backend","message":"KrishiSetu backend is running",...}
```

## Environment variables

- Copy `.env.example` to `.env`; never commit `.env`.
- Phase 0 needs no external API keys.
- Only `VITE_*` (web) and `EXPO_PUBLIC_*` (mobile) values reach the client, so they
  must never contain secrets.

## Collaboration rules

The project is built by two developers, and the structure is designed so they rarely
touch the same files:

- **Developer 1** - `backend/`, database, AI, integrations
- **Developer 2** - `apps/web/`, `apps/mobile/`, UI/UX

Shared surfaces (`packages/*`, `contracts/`, root config) change only by agreement.
All contributors must follow [AI_RULES.md](./AI_RULES.md), in particular: stay inside
the current phase, never commit secrets, and never compute business values in the
LLM layer.

## Roadmap

Phases 1-18 (backend + database, auth, farmer/lot, market data, buyers, net
realisation engine, buyer matching, AI agent, web, mobile, voice, logistics, offers,
payments, blockchain, WhatsApp, admin/analytics, integration testing) are listed in
[PROJECT_STATUS.md](./PROJECT_STATUS.md). None of them have been started.
