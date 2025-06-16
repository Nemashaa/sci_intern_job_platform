const { Recommendations, Lecturers, Students } = require('../../models');

exports.getRecommendations = async (req, res) => {
    try {
        // Fetch all recommendation requests along with their student details
        let checklecturer = await Lecturers.findOne({ where: { userID: req.user.id } });

        if (!checklecturer) {
            let checkstudent = await Students.findOne({ where: { userID: req.user.id } });

            if (!checkstudent) {
                return res.status(400).json({ message: 'Only authorized users can request lecturer recommendations' });
            }
            else {
                const recommendations = await Recommendations.findOne({
                    where: { lecturerID: checkstudent.id },
                    include: [
                        {
                            model: Lecturers,
                            attributes: ['id'],
                        }
                    ]
                });

                // If no jobs found, return a 404 response
                if (!recommendations || recommendations.length === 0) {
                    return res.status(404).send({ message: 'No recommendation requests found' });
                }


                // Return the list of recommendation requests with student id
                return res.status(200).json(recommendations);
            }

        }
        else {
            const recommendations = await Recommendations.findOne({
                where: { lecturerID: checklecturer.id },
                include: [
                    {
                        model: Students,
                        attributes: ['id'],
                    }
                ]
            });

            // If no jobs found, return a 404 response
            if (!recommendations || recommendations.length === 0) {
                return res.status(404).send({ message: 'No recommendation requests found' });
            }


            // Return the list of recommendation requests with student id
            return res.status(200).json(recommendations);
        }

    } catch (error) {
        console.error('Error fetching recommendation requests:', error);
        res.status(500).send({ error: 'An error occurred while fetching recommendation requests.' });
    }
};
