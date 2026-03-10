require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const apiRouter = require('./router');
const env = require('./config/env');
const db = require('./config/db');
const { initDatabase } = require('./scripts/init-db');

const app = express();
app.disable('x-powered-by');

const corsOrigins = env.CORS_ORIGINS
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
});
app.use(limiter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads'), { maxAge: '7d' }));
app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

const port = env.PORT;
let server;

async function start() {
  await initDatabase();
  server = app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
  server.requestTimeout = 15_000;
  server.headersTimeout = 20_000;
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

async function shutdown(signal) {
  try {
    console.log(`Shutting down (${signal})...`);
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
    await db.end();
  } finally {
    process.exit(0);
  }
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
