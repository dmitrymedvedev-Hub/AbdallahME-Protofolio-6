#!/usr/bin/env node
const mysql = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config()

async function main() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db',
    waitForConnections: true,
    connectionLimit: 5,
  })

  try {
    const projects = [
      ['E-Commerce Platform', 'Full-featured online store', 'React,Node', '/images/project-ecommerce.jpg'],
      ['Task Management App', 'Collaborative project management', 'Next.js,TS', '/images/project-taskapp.jpg'],
    ]

    for (const p of projects) {
      await pool.execute('INSERT INTO projects (title, description, tags, image) VALUES (?,?,?,?)', p)
    }

    console.log('Seed data inserted.')
  } catch (err) {
    console.error('Seeding error:', err.message || err)
    process.exitCode = 1
  } finally {
    await pool.end()
  }
}

main()
