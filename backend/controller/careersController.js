const db = require('../config/db');
const { safeJsonParse, toJsonString } = require('../services/serialization');

function mapCareer(row) {
  return {
    id: String(row.id),
    title: row.title,
    department: row.department,
    location: row.location,
    type: row.type,
    description: row.description,
    requirements: safeJsonParse(row.requirements, []),
    responsibilities: safeJsonParse(row.responsibilities, []),
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM careers ORDER BY id DESC');
    return res.json(rows.map(mapCareer));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM careers WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Career not found' });
    }
    return res.json(mapCareer(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const {
      title,
      department,
      location,
      type,
      description,
      requirements,
      responsibilities,
    } = req.body || {};

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description required' });
    }

    const [result] = await db.query(
      `INSERT INTO careers 
        (title, department, location, type, description, requirements, responsibilities)
       VALUES
        (:title, :department, :location, :type, :description, :requirements, :responsibilities)`,
      {
        title,
        department: department || '',
        location: location || '',
        type: type || '',
        description,
        requirements: toJsonString(requirements || []),
        responsibilities: toJsonString(responsibilities || []),
      }
    );

    const [rows] = await db.query('SELECT * FROM careers WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapCareer(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const [existingRows] = await db.query('SELECT * FROM careers WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Career not found' });
    }

    const existing = existingRows[0];
    const {
      title,
      department,
      location,
      type,
      description,
      requirements,
      responsibilities,
    } = req.body || {};

    await db.query(
      `UPDATE careers SET
        title = :title,
        department = :department,
        location = :location,
        type = :type,
        description = :description,
        requirements = :requirements,
        responsibilities = :responsibilities
       WHERE id = :id`,
      {
        id: req.params.id,
        title: title ?? existing.title,
        department: department ?? existing.department,
        location: location ?? existing.location,
        type: type ?? existing.type,
        description: description ?? existing.description,
        requirements:
          requirements !== undefined
            ? toJsonString(requirements || [])
            : toJsonString(safeJsonParse(existing.requirements, [])),
        responsibilities:
          responsibilities !== undefined
            ? toJsonString(responsibilities || [])
            : toJsonString(safeJsonParse(existing.responsibilities, [])),
      }
    );

    const [rows] = await db.query('SELECT * FROM careers WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapCareer(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM careers WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Career not found' });
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
