const express = require('express');
const passport = require('passport');
const router = express.Router();

const passwordController = require('../controllers/changecontrollers/passwordController');
const detailsController = require('../controllers/changecontrollers/detailsController');
const profilepictureController = require('../controllers/changecontrollers/profilepictureController');
const addressController = require('../controllers/changecontrollers/addressController');
const employeeController = require('../controllers/employeeController');
const recommendationController = require('../controllers/changecontrollers/recommendationController');

const upload = profilepictureController.setupUploadMiddleware('uploads/');

router.put('/address', passport.authenticate('jwt', { session: false }), (req, res) => {
    addressController.address(req, res, (err) => {
        if (err) {
            console.error('Error Changing Details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

router.put('/empdetails', passport.authenticate('jwt', { session: false }), (req, res) => {
    employeeController.empdetails(req, res, (err) => {
        if (err) {
            console.error('Error Changing Details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

router.put('/profilepicture', passport.authenticate('jwt', { session: false }), upload.single('profilephoto'), (req, res) => {
    profilepictureController.profilepicture(req, res, (err) => {
        if (err) {
            console.error('Error Changing Photo:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});
router.put('/details', passport.authenticate('jwt', { session: false }), (req, res) => {
    detailsController.details(req, res, (err) => {
        if (err) {
            console.error('Error Changing Details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});
router.put('/password', passport.authenticate('jwt', { session: false }), (req, res) => {
    passwordController.password(req, res, (err) => {
        if (err) {
            console.error('Error changing password:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

router.put('/recommendation', passport.authenticate('jwt', { session: false }), (req, res) => {
    recommendationController.recommendation(req, res, (err) => {
        if (err) {
            console.error('Error changing recommendation:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

module.exports = router;
