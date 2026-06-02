# Build and run the backend using Docker (no local Maven required)
Set-Location $PSScriptRoot

docker build -t enterprise-platform-backend:local .

docker run --rm -p 8080:8080 --name enterprise-backend enterprise-platform-backend:local

# After testing, stop the container with `docker stop enterprise-backend` if needed
