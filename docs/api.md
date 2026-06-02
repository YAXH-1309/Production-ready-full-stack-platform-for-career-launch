# API Specification

## GET /api/v1/status

Returns service health and a timestamp.

### Response

```json
{
  "service": "enterprise-platform",
  "status": "ok",
  "timestamp": "2026-06-02T12:00:00Z"
}
```

## Notes

- Expand this document as the backend grows.
- Add request/response schemas for domain endpoints before production launch.
