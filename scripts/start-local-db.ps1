# Start MySQL via Docker Compose, then run the project's DB setup and seed
param()

Write-Output "Starting MySQL container (docker compose up -d)..."
docker compose up -d

if ($LASTEXITCODE -ne 0) {
  Write-Error "docker compose failed. Ensure Docker Desktop is installed and running."
  exit 1
}

Write-Output "Installing node dependencies..."
npm install

Write-Output "Running DB setup..."
npm run db:setup

Write-Output "Running DB seed..."
npm run db:seed

Write-Output "Done."
