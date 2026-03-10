const express = require('express');
const settingsController = require('../controller/settingsController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, settingsController.get);
router.put('/', authMiddleware, settingsController.update);

module.exports = router;
