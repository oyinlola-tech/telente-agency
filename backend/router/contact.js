const express = require('express');
const contactController = require('../controller/contactController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', contactController.submit);
router.get('/', authMiddleware, contactController.getAll);
router.get('/:id', authMiddleware, contactController.getById);
router.delete('/:id', authMiddleware, contactController.remove);

module.exports = router;
