# Deployment

## Frontend
Deploy `apps/web` to Vercel with `NEXT_PUBLIC_API_URL` pointing at the production API gateway.

## Backend
Deploy `apps/api` to Railway or AWS ECS/Fargate. Run Prisma migrations during release, then start the NestJS process behind HTTPS.

## Data services
Use managed PostgreSQL, Redis, S3 and Meilisearch. For vectors, prefer pgvector in PostgreSQL for operational simplicity or Pinecone when independent vector scaling is required.

## Observability
Ship structured JSON logs, OpenTelemetry traces, audit logs and uptime probes. Alert on API latency, error rate, AI spend, queue depth and database saturation.
