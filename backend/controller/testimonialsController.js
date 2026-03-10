const db = require('../config/db');

function mapTestimonial(row) {
  return {
    id: String(row.id),
    name: row.name,
    role: row.role,
    company: row.company,
    content: row.content,
    rating: Number(row.rating),
    image: row.image,
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials ORDER BY id DESC');
    return res.json(rows.map(mapTestimonial));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }
    return res.json(mapTestimonial(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const { name, role, company, content, rating, image } = req.body || {};
    if (!name || !content) {
      return res.status(400).json({ error: 'Name and content required' });
    }

    const [result] = await db.query(
      `INSERT INTO testimonials (name, role, company, content, rating, image)
       VALUES (:name, :role, :company, :content, :rating, :image)`,
      {
        name,
        role: role || '',
        company: company || '',
        content,
        rating: rating !== undefined ? Number(rating) : 5,
        image: image || '',
      }
    );

    const [rows] = await db.query('SELECT * FROM testimonials WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapTestimonial(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const [existingRows] = await db.query('SELECT * FROM testimonials WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    const existing = existingRows[0];
    const { name, role, company, content, rating, image } = req.body || {};

    await db.query(
      `UPDATE testimonials SET
        name = :name,
        role = :role,
        company = :company,
        content = :content,
        rating = :rating,
        image = :image
       WHERE id = :id`,
      {
        id: req.params.id,
        name: name ?? existing.name,
        role: role ?? existing.role,
        company: company ?? existing.company,
        content: content ?? existing.content,
        rating: rating !== undefined ? Number(rating) : existing.rating,
        image: image ?? existing.image,
      }
    );

    const [rows] = await db.query('SELECT * FROM testimonials WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapTestimonial(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM testimonials WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Testimonial not found' });
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
