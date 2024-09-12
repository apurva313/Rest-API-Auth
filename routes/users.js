const express = require('express');
const userController = require('../controllers/userController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');
const authorize = require('../middleware/authorize');

const router = express.Router();

router.get('/current', ensureAuthenticated, userController.getCurrentUser);
router.get('/admin', ensureAuthenticated, authorize(['admin']), userController.getAdminRoute);
router.get('/moderator', ensureAuthenticated, authorize(['admin', 'moderator']), userController.getModeratorRoute);
router.get('/logout', ensureAuthenticated, userController.logout);

module.exports = router;