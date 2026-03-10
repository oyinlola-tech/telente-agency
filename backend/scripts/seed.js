require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const bcrypt = require('bcryptjs');
const db = require('../config/db');
const env = require('../config/env');

async function seedAdmin() {
  const username = env.DEFAULT_ADMIN_USER;
  const email = env.DEFAULT_ADMIN_EMAIL;
  const password = env.DEFAULT_ADMIN_PASS;

  const [existing] = await db.query(
    'SELECT id FROM users WHERE username = :username OR email = :email LIMIT 1',
    { username, email }
  );

  if (existing[0]) {
    console.log('Admin user already exists.');
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await db.query(
    'INSERT INTO users (username, email, password_hash, role) VALUES (:username, :email, :password_hash, :role)',
    {
      username,
      email,
      password_hash: passwordHash,
      role: 'admin',
    }
  );

  console.log(`Admin user created: ${username}`);
}

seedAdmin()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    db.end();
  });
