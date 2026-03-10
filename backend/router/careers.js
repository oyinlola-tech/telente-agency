const express = require('express');
const careersController = require('../controller/careersController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', careersController.getAll);
router.get('/:id', careersController.getById);
router.post('/', authMiddleware, careersController.create);
router.put('/:id', authMiddleware, careersController.update);
router.delete('/:id', authMiddleware, careersController.remove);

module.exports = router;
