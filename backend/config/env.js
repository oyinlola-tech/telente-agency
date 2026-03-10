function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function requireNumber(name) {
  const value = Number(requireEnv(name));
  if (Number.isNaN(value)) {
    throw new Error(`Invalid number for environment variable: ${name}`);
  }
  return value;
}

const env = {
  PORT: requireNumber('PORT'),
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_ORIGINS: requireEnv('CORS_ORIGINS'),
  JWT_SECRET: requireEnv('JWT_SECRET'),
  JWT_EXPIRES_IN: requireEnv('JWT_EXPIRES_IN'),
  OTP_TTL_MINUTES: requireNumber('OTP_TTL_MINUTES'),
  SMTP_HOST: requireEnv('SMTP_HOST'),
  SMTP_PORT: requireNumber('SMTP_PORT'),
  SMTP_USER: requireEnv('SMTP_USER'),
  SMTP_PASS: requireEnv('SMTP_PASS'),
  SMTP_FROM: requireEnv('SMTP_FROM'),
  SMTP_TO: requireEnv('SMTP_TO'),
  CONTACT_TO_EMAIL: requireEnv('CONTACT_TO_EMAIL'),
  DB_HOST: requireEnv('DB_HOST'),
  DB_PORT: requireNumber('DB_PORT'),
  DB_USER: requireEnv('DB_USER'),
  DB_PASSWORD: requireEnv('DB_PASSWORD'),
  DB_NAME: requireEnv('DB_NAME'),
  DB_POOL_SIZE: requireNumber('DB_POOL_SIZE'),
  DEFAULT_ADMIN_EMAIL: requireEnv('DEFAULT_ADMIN_EMAIL'),
  DEFAULT_ADMIN_USER: requireEnv('DEFAULT_ADMIN_USER'),
  DEFAULT_ADMIN_PASS: requireEnv('DEFAULT_ADMIN_PASS'),
};

module.exports = env;
