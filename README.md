# Enterprise Platform

Production-ready full stack enterprise platform scaffold for career launch. This repository demonstrates an opinionated enterprise architecture with a Spring Boot backend, React frontend, containerized deployment, CI/CD, observability, and professional documentation.

## Highlights

- Full stack architecture with clear separation of concerns
- Spring Boot backend with health, readiness, and sample APIs
- React + TypeScript frontend with a polished product landing page
- GitHub Actions CI pipeline for build, test, and security checks
- Kubernetes deployment manifests and HPA configuration
- Documentation set for architecture, operations, security, and career materials

## Repository Layout

- `frontend/` React application
- `backend/` Spring Boot service
- `ci-cd/` pipeline examples and automation notes
- `kubernetes/` production deployment manifests
- `monitoring/` observability stack configuration
- `security/` security and compliance policies
- `docs/` architecture and operational documentation
- `career/` interview and portfolio materials

## Quick Start

1. Start the backend from `backend/`.
2. Start the frontend from `frontend/`.
3. Review the deployment and runbook guides in `docs/` before production use.

### Local backend build without Maven

If you don't have Maven installed locally you can build and run the backend using Docker (requires Docker installed):

```powershell
cd backend
docker build -t enterprise-platform-backend:local .
docker run --rm -p 8080:8080 enterprise-platform-backend:local
```

Or use the included helper script on Windows PowerShell:

```powershell
./backend/build-with-docker.ps1
```

### Run full stack locally with Docker Compose

If you have Docker & Docker Compose installed you can build and run both services locally:

```powershell
docker compose up --build
```

A helper script is available at `scripts/start-local.ps1` for Windows PowerShell users.

**CI expectations & container registry**

CI job `docker-build.yml` builds both the backend and frontend container images and tags them with the commit SHA. Expected CI outputs when the job succeeds:

- `Build backend image` step: completes with exit code 0 and produces a local image tagged `enterprise-platform-backend:<sha>`.
- `Build frontend image` step: completes with exit code 0 and produces a local image tagged `enterprise-platform-frontend:<sha>`.

By default the workflow does not push images to a registry (`push: false`). To publish images from CI you can either use Docker Hub, GitHub Container Registry, or your cloud container registry. Example options:

- Docker Hub: create repository `your-org/enterprise-platform-backend` and set repository secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` in GitHub Actions. Update the `docker/build-push-action` step to `push: true` and set `tags: your-org/enterprise-platform-backend:${{ github.sha }}` and pass `registry: docker.io` along with `username`/`password` inputs.
- GitHub Container Registry (GHCR): use `ghcr.io/${{ github.repository_owner }}/enterprise-platform-backend:${{ github.sha }}` and the default `GITHUB_TOKEN` for authentication.

Minimal example (replace placeholders in `.github/workflows/docker-build.yml`):

```yaml
- name: Login to registry
	uses: docker/login-action@v2
	with:
		registry: ghcr.io
		username: ${{ github.actor }}
		password: ${{ secrets.GITHUB_TOKEN }}

- name: Build and push backend
	uses: docker/build-push-action@v5
	with:
		context: backend
		file: backend/Dockerfile
		push: true
		tags: ghcr.io/${{ github.repository_owner }}/enterprise-platform-backend:${{ github.sha }}
```

Notes:
- Keep `push: false` while iterating locally; switching to `push: true` will cause your CI to attempt registry authentication.
- Add registry credentials to repository secrets before enabling push in CI.

Local validation (no push): build images locally using Docker to match CI behavior:

```powershell
cd "c:\Users\yaxh\Desktop\developer arena\m6"
docker build -f backend/Dockerfile -t enterprise-platform-backend:local backend
docker build -f frontend/Dockerfile -t enterprise-platform-frontend:local frontend
```


## Status

This scaffold is designed to be extended into a production deployment rather than used as a toy demo. It includes the core surfaces needed for a credible enterprise portfolio project.
