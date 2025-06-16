const express = require('express');
const passport = require('passport');
const router = express.Router();

const loginController = require('../controllers/loginController');
const registrationController = require('../controllers/registrationController');

router.post('/register', registrationController.register);
router.post('/login', loginController.login);
router.post('/registeremployee', passport.authenticate('jwt', { session: false }), (req, res) => {
    registrationController.register(req, res, (err) => {
        if (err) {
            console.error('Error Register Employee:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

module.exports = router;
