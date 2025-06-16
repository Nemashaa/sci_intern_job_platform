const express = require('express');
const passport = require('passport');
const router = express.Router();

const addJobPostController = require('../controllers/addcontrollers/addJobPostController');
const addRecommendationController = require('../controllers/addcontrollers/addRecommendationController');


router.post('/jobpost', passport.authenticate('jwt', { session: false }), (req, res) => {
    addJobPostController.addNewJobPost(req, res, (err) => {
        if (err) {
            console.error('Error Adding new job post:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

router.post('/recommendation', passport.authenticate('jwt', { session: false }), (req, res) => {
    addRecommendationController.addRecommendation(req, res, (err) => {
        if (err) {
            console.error('Error Adding new recommendation request:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

module.exports = router;
