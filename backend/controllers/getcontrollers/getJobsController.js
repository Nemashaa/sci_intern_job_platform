const { JobPosts, Employers } = require('../../models');

exports.getAllJobs = async (req, res) => {
    try {
        // Fetch all job posts along with their employer details
        const jobs = await JobPosts.findAll({
            include: [
                {
                    model: Employers,
                    attributes: { exclude: ['createdAt', 'updatedAt'] }, // Exclude unnecessary fields
                }
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude timestamps for job posts
        });

        // If no jobs found, return a 404 response
        if (!jobs || jobs.length === 0) {
            return res.status(404).send({ message: 'No job posts found' });
        }


        // Return the list of jobs with employer details
        return res.status(200).json(jobs);
    } catch (error) {
        console.error('Error fetching job posts:', error);
        res.status(500).send({ error: 'An error occurred while fetching job posts.' });
    }
};
