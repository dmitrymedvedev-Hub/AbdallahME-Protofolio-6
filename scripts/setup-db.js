#!/usr/bin/env node
const fs = require('fs')
const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

async function main() {
  const sqlPath = path.join(__dirname, '..', 'db', 'schema.sql')
  if (!fs.existsSync(sqlPath)) {
    console.error('schema.sql not found at', sqlPath)
    process.exit(1)
  }

  const sql = fs.readFileSync(sqlPath, 'utf8')

  const connectionConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true,
    // Do not specify database here because schema.sql creates it
  }

  let connection
  try {
    connection = await mysql.createConnection(connectionConfig)
    console.log('Connected to MySQL, running schema...')
    await connection.query(sql)
    console.log('Database schema executed successfully.')
  } catch (err) {
    console.error('Error running schema:', err.message || err)
    process.exitCode = 1
  } finally {
    if (connection) await connection.end()
  }
}

main()
