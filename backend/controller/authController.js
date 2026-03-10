const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { sendMail } = require('../services/mailer');
const env = require('../config/env');
const { renderOtpEmail } = require('../services/emailTemplates');

function generateOtpCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function createOtp(userId) {
  const code = generateOtpCode();
  const codeHash = await bcrypt.hash(code, 10);
  const ttlMinutes = env.OTP_TTL_MINUTES;
  const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);

  const [result] = await db.query(
    `INSERT INTO login_otps (user_id, code_hash, expires_at)
     VALUES (:user_id, :code_hash, :expires_at)`,
    {
      user_id: userId,
      code_hash: codeHash,
      expires_at: expiresAt,
    }
  );

  return { id: result.insertId, code, expiresAt };
}

async function login(req, res, next) {
  try {
    const { email, username, password } = req.body || {};
    const loginValue = (email || username || '').trim();
    if (!loginValue || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const [rows] = await db.query(
      `SELECT id, username, email, password_hash, role
       FROM users
       WHERE email = :login OR username = :login
       LIMIT 1`,
      { login: loginValue }
    );

    const user = rows[0];
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const otp = await createOtp(user.id);
    const recipient = user.email || loginValue;

    await sendMail({
      to: recipient,
      subject: 'Your Telente admin OTP code',
      text: `Your login code is ${otp.code}. It expires in ${env.OTP_TTL_MINUTES} minutes.`,
      html: renderOtpEmail({ code: otp.code, ttlMinutes: env.OTP_TTL_MINUTES }),
    });

    return res.json({
      otpRequired: true,
      otpId: String(otp.id),
      message: 'OTP sent to your email',
    });
  } catch (err) {
    return next(err);
  }
}

async function verify(req, res) {
  if (!req.user) {
    return res.status(401).json({ valid: false });
  }
  return res.json({ valid: true, user: req.user });
}

async function verifyOtp(req, res, next) {
  try {
    const { otpId, code } = req.body || {};
    if (!otpId || !code) {
      return res.status(400).json({ error: 'OTP and code required' });
    }

    const [rows] = await db.query(
      `SELECT o.id, o.code_hash, o.expires_at, o.used_at, u.id AS user_id, u.username, u.email, u.role
       FROM login_otps o
       JOIN users u ON u.id = o.user_id
       WHERE o.id = :id
       LIMIT 1`,
      { id: otpId }
    );

    const otp = rows[0];
    if (!otp) {
      return res.status(404).json({ error: 'OTP not found' });
    }
    if (otp.used_at) {
      return res.status(400).json({ error: 'OTP already used' });
    }
    if (otp.expires_at && new Date(otp.expires_at) < new Date()) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    const match = await bcrypt.compare(String(code), otp.code_hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    await db.query('UPDATE login_otps SET used_at = NOW() WHERE id = :id', { id: otp.id });

    const payload = {
      id: String(otp.user_id),
      username: otp.username,
      email: otp.email,
      role: otp.role,
    };
    const token = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });

    return res.json({ token, user: payload });
  } catch (err) {
    return next(err);
  }
}

async function resendOtp(req, res, next) {
  try {
    const { otpId } = req.body || {};
    if (!otpId) {
      return res.status(400).json({ error: 'OTP id required' });
    }

    const [rows] = await db.query(
      `SELECT o.id, u.id AS user_id, u.email
       FROM login_otps o
       JOIN users u ON u.id = o.user_id
       WHERE o.id = :id
       LIMIT 1`,
      { id: otpId }
    );

    const otp = rows[0];
    if (!otp) {
      return res.status(404).json({ error: 'OTP not found' });
    }

    await db.query('UPDATE login_otps SET used_at = NOW() WHERE id = :id', { id: otp.id });

    const nextOtp = await createOtp(otp.user_id);

    await sendMail({
      to: otp.email,
      subject: 'Your Telente admin OTP code',
      text: `Your login code is ${nextOtp.code}. It expires in ${env.OTP_TTL_MINUTES} minutes.`,
      html: renderOtpEmail({ code: nextOtp.code, ttlMinutes: env.OTP_TTL_MINUTES }),
    });

    return res.json({
      otpRequired: true,
      otpId: String(nextOtp.id),
      message: 'OTP resent to your email',
    });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  login,
  verify,
  verifyOtp,
  resendOtp,
};
