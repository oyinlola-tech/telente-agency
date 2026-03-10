const db = require('../config/db');
const { safeJsonParse, toJsonString } = require('../services/serialization');

function mapService(row) {
  return {
    id: String(row.id),
    title: row.title,
    description: row.description,
    icon: row.icon,
    features: safeJsonParse(row.features, []),
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM services ORDER BY id DESC');
    return res.json(rows.map(mapService));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM services WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Service not found' });
    }
    return res.json(mapService(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const { title, description, icon, features } = req.body || {};
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description required' });
    }

    const [result] = await db.query(
      'INSERT INTO services (title, description, icon, features) VALUES (:title, :description, :icon, :features)',
      {
        title,
        description,
        icon: icon || '',
        features: toJsonString(features || []),
      }
    );

    const [rows] = await db.query('SELECT * FROM services WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapService(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const { title, description, icon, features } = req.body || {};
    const [existingRows] = await db.query('SELECT * FROM services WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Service not found' });
    }

    const existing = existingRows[0];
    await db.query(
      'UPDATE services SET title = :title, description = :description, icon = :icon, features = :features WHERE id = :id',
      {
        id: req.params.id,
        title: title ?? existing.title,
        description: description ?? existing.description,
        icon: icon ?? existing.icon,
        features:
          features !== undefined
            ? toJsonString(features || [])
            : toJsonString(safeJsonParse(existing.features, [])),
      }
    );

    const [rows] = await db.query('SELECT * FROM services WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapService(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM services WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
