const db = require('../config/db');
const { safeJsonParse, toJsonString } = require('../services/serialization');

async function get(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM settings WHERE id = 1 LIMIT 1');
    if (!rows[0]) {
      return res.json({});
    }
    return res.json(safeJsonParse(rows[0].data, {}));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const data = req.body || {};
    await db.query(
      `INSERT INTO settings (id, data)
       VALUES (1, :data)
       ON DUPLICATE KEY UPDATE data = :data`,
      {
        data: toJsonString(data),
      }
    );
    return res.json(data);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  get,
  update,
};
