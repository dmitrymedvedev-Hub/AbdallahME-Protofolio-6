#!/usr/bin/env node
const { execSync } = require('child_process')
const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config()

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' })
}

async function waitForMysql({ host, user, password, database, timeout = 120000, interval = 2000 }) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const conn = await mysql.createConnection({ host, user, password, database, connectTimeout: 2000 })
      await conn.end()
      return true
    } catch (e) {
      process.stdout.write('.')
      await new Promise(r => setTimeout(r, interval))
    }
  }
  return false
}

async function main() {
  try {
    console.log('Starting MySQL using docker compose...')
    run('docker compose up -d')
  } catch (err) {
    console.error('\nFailed to start docker compose. Is Docker installed and running?')
    process.exit(1)
  }

  const cfg = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db',
  }

  process.stdout.write('Waiting for MySQL')
  const ready = await waitForMysql(cfg)
  if (!ready) {
    console.error('\nMySQL did not become ready in time.')
    process.exit(1)
  }

  console.log('\nMySQL ready — running DB setup script...')
  try {
    run('node scripts/setup-db.cjs')
  } catch (err) {
    console.error('DB setup script failed:', err.message)
    process.exit(1)
  }

  console.log('DB setup completed — running seed script...')
  try {
    run('node scripts/seed-db.cjs')
  } catch (err) {
    console.error('Seed script failed:', err.message)
  }

  console.log('All done. Database should be created and seeded.')
}

main()
