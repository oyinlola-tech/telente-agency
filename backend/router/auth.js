const express = require('express');
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/login', authController.login);
router.post('/verify-otp', authController.verifyOtp);
router.post('/resend-otp', authController.resendOtp);
router.get('/verify', authMiddleware, authController.verify);

module.exports = router;
