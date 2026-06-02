# Enterprise Platform — Project Report

## Project Description

Enterprise Platform is a production-oriented full stack portfolio scaffold demonstrating enterprise architecture, secure delivery, observability, and career-readiness materials. It includes a React + TypeScript frontend, a Spring Boot backend, containerization, Kubernetes manifests, CI workflows, and documentation for operations, security, and onboarding.

## Setup Instructions

Prerequisites
- Node 20+, npm
- Docker (for local container builds and Docker Compose)
- (Optional) Maven 3.8+ to build the backend locally

Local frontend (development)
1. cd frontend
2. npm ci
3. npm run dev

Local backend (if you have Maven)
1. cd backend
2. mvn test package
3. java -jar target/<artifact>.jar

Backend without Maven (using Docker)

```powershell
cd "c:\Users\yaxh\Desktop\developer arena\m6"
# Build with Docker (no local Maven required)
docker build -f backend/Dockerfile -t enterprise-platform-backend:local backend
# Run the backend
docker run --rm -p 8080:8080 enterprise-platform-backend:local
```

Full stack with Docker Compose

```powershell
cd "c:\Users\yaxh\Desktop\developer arena\m6"
# Build and run both services locally
docker compose up --build
# Stop and remove
docker compose down
```

CI (what to expect)
- The workflow `[.github/workflows/docker-build.yml](.github/workflows/docker-build.yml)` builds backend and frontend images and tags them with the commit SHA. By default it does not push images.
- To publish images, configure a registry login step and set `push: true` in the workflow (see README for examples).

## Screenshots

Add screenshots into `screenshots/` (create the folder). Recommended images and names:
- `screenshots/frontend-home.png` — frontend landing page
- `screenshots/backend-status.png` — response from `GET /api/v1/status`
- `screenshots/ci-success.png` — successful CI job run showing the `Build backend image` and `Build frontend image` steps

How to capture and add screenshots (Windows)
- Use Snipping Tool or `Win+Shift+S` to capture images.
- Save images to `screenshots/` and commit them.

Markdown example to include an image inside this report after you add it:

```md
![Frontend home](screenshots/frontend-home.png)
```

(Placeholders are used in the repository now — add real images later.)

## Explanations

Architecture overview
- Frontend: React + TypeScript static SPA served by nginx for production.
- Backend: Spring Boot service exposing REST endpoints and actuator health checks.
- Orchestration: Kubernetes manifests are in the `kubernetes/` folder and include probes and HPA configuration.
- CI/CD: GitHub Actions workflows in `.github/workflows/` build and validate artifacts; `docker-build.yml` demonstrates an image build pipeline.

Deployment & release strategy
- Build artifacts (JAR, frontend static assets) in CI.
- Build container images and push to a registry (GHCR, Docker Hub, or cloud registry) with immutable tags (`sha` or semver).
- Roll out to Kubernetes using Blue/Green or Canary strategies; use readiness probes to control traffic shift.

Security & compliance
- Secrets must not be stored in repo; use Vault or cloud KMS and repository secrets for CI.
- Add SAST & dependency scanning in CI before enabling image pushes.
- Enforce RBAC, network policies, TLS, and regular pen tests for production readiness.

Monitoring & observability
- Expose Prometheus-compatible metrics (Spring Actuator Prometheus) and instrument key business timers.
- Centralize logs (ELK/Opensearch) and add distributed tracing (Jaeger) for latency investigations.
- Define SLOs and alerting rules; connect alerts to on-call (PagerDuty).

Performance & benchmarks
- Current scaffold provides a baseline: lightweight API and static frontend. Add load tests (k6, Gatling) to measure latency and throughput under expected traffic.
- Suggested benchmark targets for an enterprise demo: P95 API < 200ms, cache hit rate > 80% after adding caching layer, deploy time < 10 minutes for full CI pipeline.

Maintenance & runbook
- See [docs/runbook.md](docs/runbook.md) for operational steps: start/stop, health checks, incident response, and rollback guidance.
- Regular tasks: dependency updates, security scans, backups verification, and DR tests.

Career & portfolio usage
- Use this repository to demonstrate: architectural decisions, DevOps pipeline, observability, security posture, and leadership artifacts (runbooks, docs, onboarding).
- Add a narrative for each major change (why, tradeoffs, metrics gained) when you present it in interviews.

## Validation & expected outputs

- Frontend build: `frontend` builds with `npm run build` and produces `dist/`.
- Backend image build (CI/local): `docker build -f backend/Dockerfile -t enterprise-platform-backend:<tag> backend` should succeed and produce an image.
- Health endpoint: GET `http://localhost:8080/api/v1/status` returns a JSON payload with `service`, `status`, and `timestamp`.

Example curl check

```bash
curl -s http://localhost:8080/api/v1/status | jq
```

Expected sample response

```json
{
  "service": "enterprise-platform",
  "status": "ok",
  "timestamp": "2026-06-02T12:00:00Z"
}
```

## Files & locations (quick links)

- [README.md](README.md)
- [backend/Dockerfile](backend/Dockerfile)
- [frontend/Dockerfile](frontend/Dockerfile)
- [docker-compose.yml](docker-compose.yml)
- [.github/workflows/docker-build.yml](.github/workflows/docker-build.yml)
- [docs/architecture.md](docs/architecture.md)
- [docs/runbook.md](docs/runbook.md)
- [career/portfolio.md](career/portfolio.md)

## Next steps

- Add real screenshots into `screenshots/` and commit them.
- Configure registry secrets and enable `push: true` in the CI workflow to publish images.
- Add database migrations, caching, authentication, and integration tests to move from scaffold → production.

---

Report generated: 2026-06-02
