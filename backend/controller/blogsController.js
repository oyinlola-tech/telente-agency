const db = require('../config/db');
const { safeJsonParse, toJsonString } = require('../services/serialization');

function mapBlog(row) {
  return {
    id: String(row.id),
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    authorRole: row.author_role,
    date: row.date ? new Date(row.date).toISOString() : null,
    category: row.category,
    readTime: row.read_time,
    image: row.image,
    tags: safeJsonParse(row.tags, []),
  };
}

async function getAll(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM blogs ORDER BY date DESC, id DESC');
    return res.json(rows.map(mapBlog));
  } catch (err) {
    return next(err);
  }
}

async function getById(req, res, next) {
  try {
    const [rows] = await db.query('SELECT * FROM blogs WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!rows[0]) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    return res.json(mapBlog(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function create(req, res, next) {
  try {
    const {
      title,
      excerpt,
      content,
      author,
      authorRole,
      date,
      category,
      readTime,
      image,
      tags,
    } = req.body || {};

    if (!title || !excerpt || !content) {
      return res.status(400).json({ error: 'Title, excerpt, and content required' });
    }

    const [result] = await db.query(
      `INSERT INTO blogs 
        (title, excerpt, content, author, author_role, date, category, read_time, image, tags)
       VALUES
        (:title, :excerpt, :content, :author, :authorRole, :date, :category, :readTime, :image, :tags)`,
      {
        title,
        excerpt,
        content,
        author: author || '',
        authorRole: authorRole || '',
        date: date ? new Date(date) : new Date(),
        category: category || '',
        readTime: readTime || '',
        image: image || '',
        tags: toJsonString(tags || []),
      }
    );

    const [rows] = await db.query('SELECT * FROM blogs WHERE id = :id LIMIT 1', {
      id: result.insertId,
    });
    return res.status(201).json(mapBlog(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function update(req, res, next) {
  try {
    const [existingRows] = await db.query('SELECT * FROM blogs WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    if (!existingRows[0]) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    const existing = existingRows[0];
    const {
      title,
      excerpt,
      content,
      author,
      authorRole,
      date,
      category,
      readTime,
      image,
      tags,
    } = req.body || {};

    await db.query(
      `UPDATE blogs SET
        title = :title,
        excerpt = :excerpt,
        content = :content,
        author = :author,
        author_role = :authorRole,
        date = :date,
        category = :category,
        read_time = :readTime,
        image = :image,
        tags = :tags
       WHERE id = :id`,
      {
        id: req.params.id,
        title: title ?? existing.title,
        excerpt: excerpt ?? existing.excerpt,
        content: content ?? existing.content,
        author: author ?? existing.author,
        authorRole: authorRole ?? existing.author_role,
        date: date ? new Date(date) : existing.date,
        category: category ?? existing.category,
        readTime: readTime ?? existing.read_time,
        image: image ?? existing.image,
        tags:
          tags !== undefined ? toJsonString(tags || []) : toJsonString(safeJsonParse(existing.tags, [])),
      }
    );

    const [rows] = await db.query('SELECT * FROM blogs WHERE id = :id LIMIT 1', {
      id: req.params.id,
    });
    return res.json(mapBlog(rows[0]));
  } catch (err) {
    return next(err);
  }
}

async function remove(req, res, next) {
  try {
    const [result] = await db.query('DELETE FROM blogs WHERE id = :id', {
      id: req.params.id,
    });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
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
