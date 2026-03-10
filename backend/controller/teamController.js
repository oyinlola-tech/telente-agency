const db = require('../config/db');

function mapMember(row) {
  return {
    id: String(row.id),
    name: row.name,
    role: row.role,
    bio: row.bio,
    image: row.image,
    linkedin: row.linkedin,
    twitter: row.twitter,
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM team ORDER BY id DESC');
    return res.json(rows.map(mapMember));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM team WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Team member not found' });
    }
    return res.json(mapMember(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const { name, role, bio, image, linkedin, twitter } = req.body || {};
    if (!name || !role) {
      return res.status(400).json({ error: 'Name and role required' });
    }

    const [result] = await db.query(
      `INSERT INTO team (name, role, bio, image, linkedin, twitter)
       VALUES (:name, :role, :bio, :image, :linkedin, :twitter)`,
      {
        name,
        role,
        bio: bio || '',
        image: image || '',
        linkedin: linkedin || '',
        twitter: twitter || '',
      }
    );

    const [rows] = await db.query('SELECT * FROM team WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapMember(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const [existingRows] = await db.query('SELECT * FROM team WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Team member not found' });
    }

    const existing = existingRows[0];
    const { name, role, bio, image, linkedin, twitter } = req.body || {};

    await db.query(
      `UPDATE team SET
        name = :name,
        role = :role,
        bio = :bio,
        image = :image,
        linkedin = :linkedin,
        twitter = :twitter
       WHERE id = :id`,
      {
        id: req.params.id,
        name: name ?? existing.name,
        role: role ?? existing.role,
        bio: bio ?? existing.bio,
        image: image ?? existing.image,
        linkedin: linkedin ?? existing.linkedin,
        twitter: twitter ?? existing.twitter,
      }
    );

    const [rows] = await db.query('SELECT * FROM team WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapMember(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM team WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Team member not found' });
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
