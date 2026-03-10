const nodemailer = require('nodemailer');
const env = require('../config/env');

let cachedTransport = null;

function getTransport() {
  if (cachedTransport) return cachedTransport;

  const host = env.SMTP_HOST;
  const port = env.SMTP_PORT;
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;

  cachedTransport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  return cachedTransport;
}

async function sendMail({ to, subject, text, html }) {
  const transport = getTransport();
  if (!transport) {
    const err = new Error('SMTP not configured');
    err.code = 'SMTP_NOT_CONFIGURED';
    throw err;
  }

  const from = env.SMTP_FROM;
  return transport.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}

module.exports = {
  sendMail,
};
