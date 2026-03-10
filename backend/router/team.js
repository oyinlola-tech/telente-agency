const express = require('express');
const teamController = require('../controller/teamController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', teamController.getAll);
router.get('/:id', teamController.getById);
router.post('/', authMiddleware, teamController.create);
router.put('/:id', authMiddleware, teamController.update);
router.delete('/:id', authMiddleware, teamController.remove);

module.exports = router;
