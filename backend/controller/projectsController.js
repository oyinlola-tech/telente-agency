const db = require('../config/db');
const { safeJsonParse, toJsonString } = require('../services/serialization');

function mapProject(row) {
  return {
    id: String(row.id),
    title: row.title,
    client: row.client,
    category: row.category,
    description: row.description,
    technologies: safeJsonParse(row.technologies, []),
    image: row.image,
    testimonial: row.testimonial,
    results: safeJsonParse(row.results, []),
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM projects ORDER BY id DESC');
    return res.json(rows.map(mapProject));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM projects WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Project not found' });
    }
    return res.json(mapProject(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const {
      title,
      client,
      category,
      description,
      technologies,
      image,
      testimonial,
      results,
    } = req.body || {};

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description required' });
    }

    const [result] = await db.query(
      `INSERT INTO projects 
        (title, client, category, description, technologies, image, testimonial, results)
       VALUES
        (:title, :client, :category, :description, :technologies, :image, :testimonial, :results)`,
      {
        title,
        client: client || '',
        category: category || '',
        description,
        technologies: toJsonString(technologies || []),
        image: image || '',
        testimonial: testimonial || '',
        results: toJsonString(results || []),
      }
    );

    const [rows] = await db.query('SELECT * FROM projects WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapProject(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const [existingRows] = await db.query('SELECT * FROM projects WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const existing = existingRows[0];
    const {
      title,
      client,
      category,
      description,
      technologies,
      image,
      testimonial,
      results,
    } = req.body || {};

    await db.query(
      `UPDATE projects SET
        title = :title,
        client = :client,
        category = :category,
        description = :description,
        technologies = :technologies,
        image = :image,
        testimonial = :testimonial,
        results = :results
       WHERE id = :id`,
      {
        id: req.params.id,
        title: title ?? existing.title,
        client: client ?? existing.client,
        category: category ?? existing.category,
        description: description ?? existing.description,
        technologies:
          technologies !== undefined
            ? toJsonString(technologies || [])
            : toJsonString(safeJsonParse(existing.technologies, [])),
        image: image ?? existing.image,
        testimonial: testimonial ?? existing.testimonial,
        results:
          results !== undefined
            ? toJsonString(results || [])
            : toJsonString(safeJsonParse(existing.results, [])),
      }
    );

    const [rows] = await db.query('SELECT * FROM projects WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapProject(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM projects WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Project not found' });
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
