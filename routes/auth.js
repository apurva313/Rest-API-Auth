const express = require('express');
const authController = require('../controllers/authController');
const ensureAuthenticated = require('../middleware/ensureAuthenticated');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/login/2fa', authController.login2FA);
router.post('/refresh-token', authController.refreshToken);
router.get('/2fa/generate', ensureAuthenticated, authController.generate2FA);
router.post('/2fa/validate', ensureAuthenticated, authController.validate2FA);
router.get('/logout', ensureAuthenticated, authController.logout);

module.exports = router;