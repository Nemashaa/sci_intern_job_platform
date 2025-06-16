const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/getcontrollers/userController');
const usersCustomController = require('../controllers/getcontrollers/usersCustomController');
const getJobsController = require('../controllers/getcontrollers/getJobsController');
const getRecommendationsController = require('../controllers/getcontrollers/getRecommendationsController');


router.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
    userController.user(req, res, (err) => {
        if (err) {
            console.error('Error getting user Details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

router.get('/users', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        await usersCustomController.getUsers(req, res);
    } catch (err) {
        console.error('Error getting users:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/jobs', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        await getJobsController.getAllJobs(req, res);
    } catch (err) {
        console.error('Error getting users:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/recommendations', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        await getRecommendationsController.getRecommendations(req, res);
    } catch (err) {
        console.error('Error getting users:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
