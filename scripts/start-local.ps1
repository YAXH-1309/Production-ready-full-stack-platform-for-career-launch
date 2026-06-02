# Build and start the full stack locally using Docker Compose
Set-Location $PSScriptRoot\..\

docker compose up --build

# To run in detached mode:
# docker compose up --build -d

# To stop and remove containers:
# docker compose down
