# Deployment Guide

## Build Artifacts

- Backend: Maven package output
- Frontend: Vite production build
- Kubernetes: deployment manifests in `kubernetes/`

## Deployment Flow

1. Build and test in CI.
2. Publish container images to a registry.
3. Apply Kubernetes manifests to the target environment.
4. Verify health endpoints and application metrics.

## Rollback

- Revert to the previous image tag.
- Confirm service health and user-facing availability.
- Record the incident in the operational log.
