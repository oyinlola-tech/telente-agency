const express = require('express');

const authRoutes = require('./auth');
const servicesRoutes = require('./services');
const projectsRoutes = require('./projects');
const blogsRoutes = require('./blogs');
const teamRoutes = require('./team');
const testimonialsRoutes = require('./testimonials');
const careersRoutes = require('./careers');
const contactRoutes = require('./contact');
const settingsRoutes = require('./settings');
const uploadsRoutes = require('./uploads');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/services', servicesRoutes);
router.use('/projects', projectsRoutes);
router.use('/blogs', blogsRoutes);
router.use('/team', teamRoutes);
router.use('/testimonials', testimonialsRoutes);
router.use('/careers', careersRoutes);
router.use('/contact', contactRoutes);
router.use('/settings', settingsRoutes);
router.use('/uploads', uploadsRoutes);

module.exports = router;
