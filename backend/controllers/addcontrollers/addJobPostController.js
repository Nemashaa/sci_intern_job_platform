const { Employers, JobPosts } = require('../../models');

exports.addNewJobPost = async (req, res) => {
    try {
        const { deadline, jobDescription, jobTitle, jobRole, jobPostImage } = req.body;

        if (!jobDescription || !jobTitle || !jobRole) {
            return res.status(400).json({ error: 'Required fields are missing.' });
        }

        let checkemployer = await Employers.findOne({ where: { userID: req.user.id } });
        if (!checkemployer) {
            return res.status(400).json({ message: 'Only authorized users can add job posts' });
        }
        await JobPosts.create({  employerID: checkemployer.id, deadline, jobDescription, jobTitle, jobRole, jobPostImage});
        return res.status(201).json({
            message: 'New job post added successfully',
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while adding new job post.' });
        }
    }
};
