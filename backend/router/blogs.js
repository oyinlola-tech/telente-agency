const express = require('express');
const blogsController = require('../controller/blogsController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', blogsController.getAll);
router.get('/:id', blogsController.getById);
router.post('/', authMiddleware, blogsController.create);
router.put('/:id', authMiddleware, blogsController.update);
router.delete('/:id', authMiddleware, blogsController.remove);

module.exports = router;
