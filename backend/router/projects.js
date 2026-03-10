const express = require('express');
const projectsController = require('../controller/projectsController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', projectsController.getAll);
router.get('/:id', projectsController.getById);
router.post('/', authMiddleware, projectsController.create);
router.put('/:id', authMiddleware, projectsController.update);
router.delete('/:id', authMiddleware, projectsController.remove);

module.exports = router;
