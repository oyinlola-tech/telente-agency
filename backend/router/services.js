const express = require('express');
const servicesController = require('../controller/servicesController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.post('/', authMiddleware, servicesController.create);
router.put('/:id', authMiddleware, servicesController.update);
router.delete('/:id', authMiddleware, servicesController.remove);

module.exports = router;
