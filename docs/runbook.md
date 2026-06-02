# Operational Runbook

## Startup

1. Start the backend service.
2. Verify `/api/v1/status` returns an OK response.
3. Deploy the frontend and confirm the landing page loads.

## Health Checks

- Backend status endpoint: `/api/v1/status`
- Kubernetes readiness probe: `/actuator/health/readiness`
- Kubernetes liveness probe: `/actuator/health/liveness`

## Incident Response

- Check deployment health and recent logs.
- Verify external dependencies and environment variables.
- Roll back to the previous deployment if the failure is tied to the latest release.
- Capture the timeline and remediation notes in the incident log.
