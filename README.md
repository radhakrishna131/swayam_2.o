# Swayam 2.o AI

**India's Next Generation Learning Platform** is an AI-powered, accessible, enterprise-grade learning platform inspired by SWAYAM and rebuilt from scratch for scale.

## Architecture

- `apps/web`: Next.js App Router, React, TypeScript, Tailwind, shadcn-ready UI primitives, Framer Motion-ready structure, React Query/Zustand-ready providers.
- `apps/api`: NestJS-style modular API with Prisma schema, JWT/RBAC boundaries, OpenAPI document, health, courses, AI tutor and assignments modules.
- `packages/config`: Shared TypeScript configuration.
- `infra`: Docker Compose for PostgreSQL, Redis, Meilisearch and app services.

## First production slice

This repository currently implements the foundation and the first end-to-end feature set:

1. Modern landing page with hero, statistics, trending courses, universities, stories, FAQ, accessibility affordances and dark-mode styling.
2. Student dashboard UI with continue learning, AI recommendations, streaks, deadlines and achievements.
3. Course discovery UI with natural-language AI search, filters and responsive course cards.
4. Backend module contracts for auth, courses, AI tutor, assignments, certificates and analytics.
5. Prisma schema for users, roles, universities, courses, enrollments, lessons, assignments, certificates, notifications, audit logs and AI conversations.
6. Docker, CI, seed data, OpenAPI starter documentation and deployment notes.

## Quick start

```bash
cp .env.example .env
docker compose -f infra/docker-compose.yml up --build
```

For local development without Docker:

```bash
npm install
npm run dev
```

## Default seed administrator

- Email: `admin@swayam2.ai`
- Password: value of `SEED_SUPER_ADMIN_PASSWORD` in `.env`
- Role: `SUPER_ADMIN`

Rotate these credentials immediately outside local development.

## Production readiness checklist

- Use managed PostgreSQL with automated backups and point-in-time recovery.
- Use Redis with TLS and eviction policies for sessions, rate limits and queues.
- Store videos and submissions in private S3 buckets with signed URLs.
- Configure Meilisearch private keys and network isolation.
- Configure OpenAI and vector database keys through a secrets manager.
- Enforce CSP, HSTS, CSRF tokens, input validation and audit logging at the edge and API.
- Run accessibility, unit, integration, E2E and load tests before release.
