require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const mysql = require('mysql2/promise');
const env = require('../config/env');
const db = require('../config/db');
const { seedAdmin } = require('./seed');

const schemaStatements = [
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS login_otps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    code_hash VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    used_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100) DEFAULT '',
    features JSON NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    client VARCHAR(255) DEFAULT '',
    category VARCHAR(100) DEFAULT '',
    description TEXT NOT NULL,
    technologies JSON NULL,
    image VARCHAR(500) DEFAULT '',
    testimonial TEXT,
    results JSON NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    content LONGTEXT NOT NULL,
    author VARCHAR(255) DEFAULT '',
    author_role VARCHAR(255) DEFAULT '',
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(100) DEFAULT '',
    read_time VARCHAR(50) DEFAULT '',
    image VARCHAR(500) DEFAULT '',
    tags JSON NULL
  )`,
  `CREATE TABLE IF NOT EXISTS team (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    bio TEXT,
    image VARCHAR(500) DEFAULT '',
    linkedin VARCHAR(255) DEFAULT '',
    twitter VARCHAR(255) DEFAULT ''
  )`,
  `CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT '',
    company VARCHAR(255) DEFAULT '',
    content TEXT NOT NULL,
    rating INT DEFAULT 5,
    image VARCHAR(500) DEFAULT ''
  )`,
  `CREATE TABLE IF NOT EXISTS careers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) DEFAULT '',
    location VARCHAR(255) DEFAULT '',
    type VARCHAR(100) DEFAULT '',
    description TEXT NOT NULL,
    requirements JSON NULL,
    responsibilities JSON NULL
  )`,
  `CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(100) DEFAULT '',
    subject VARCHAR(255) DEFAULT '',
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS settings (
    id INT PRIMARY KEY,
    data JSON NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`,
];

async function ensureDatabase() {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${env.DB_NAME}\``);
  await connection.end();
}

async function ensureSchema() {
  for (const statement of schemaStatements) {
    await db.query(statement);
  }
}

async function initDatabase() {
  await ensureDatabase();
  await ensureSchema();
  await seedAdmin();
}

module.exports = { initDatabase };
