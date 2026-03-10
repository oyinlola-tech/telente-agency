const express = require('express');
const testimonialsController = require('../controller/testimonialsController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', testimonialsController.getAll);
router.get('/admin', authMiddleware, testimonialsController.getAllAdmin);
router.get('/:id', testimonialsController.getById);
router.post('/public', testimonialsController.createPublic);
router.post('/', authMiddleware, testimonialsController.create);
router.put('/:id/approve', authMiddleware, testimonialsController.approve);
router.put('/:id', authMiddleware, testimonialsController.update);
router.delete('/:id', authMiddleware, testimonialsController.remove);

module.exports = router;
