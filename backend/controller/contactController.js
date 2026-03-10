const db = require('../config/db');
const { sendMail } = require('../services/mailer');
const env = require('../config/env');
const { renderContactEmail } = require('../services/emailTemplates');

function mapContact(row) {
  return {
    id: String(row.id),
    name: row.name,
    email: row.email,
    phone: row.phone,
    subject: row.subject,
    message: row.message,
    createdAt: row.created_at ? new Date(row.created_at).toISOString() : null,
  };
}

async function submit(req, res, next) {
  try {
    const { name, email, phone, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message required' });
    }

    let emailSent = false;
    const smtpTo = env.CONTACT_TO_EMAIL;

    const [result] = await db.query(
      `INSERT INTO contact_submissions (name, email, phone, subject, message)
       VALUES (:name, :email, :phone, :subject, :message)`,
      {
        name,
        email,
        phone: phone || '',
        subject: subject || '',
        message,
      }
    );

    const [rows] = await db.query(
      'SELECT * FROM contact_submissions WHERE id = :id LIMIT 1',
      { id: result.insertId }
    );

    if (smtpTo) {
      try {
        await sendMail({
          to: smtpTo,
          subject: subject ? `New contact: ${subject}` : 'New contact submission',
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\nMessage:\n${message}`,
          html: renderContactEmail({ name, email, phone, subject, message }),
        });
        emailSent = true;
      } catch (err) {
        console.error('Contact email failed:', err.message || err);
      }
    }

    return res.status(201).json({ ...mapContact(rows[0]), emailSent });
  } catch (err) {
    return next(err);
  }
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC, id DESC'
    );
    return res.json(rows.map(mapContact));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query(
      'SELECT * FROM contact_submissions WHERE id = :id LIMIT 1',
      { id: req.params.id }
    );
    if (!rows[0]) {
      return res.status(404).json({ error: 'Contact submission not found' });
    }
    return res.json(mapContact(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM contact_submissions WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Contact submission not found' });
    }
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  submit,
  getAll,
  getById,
  remove,
};
