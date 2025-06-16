const { Recommendations, Lecturers, Students } = require('../../models');

exports.addRecommendation = async (req, res) => {
    try {
        const { lecturerID } = req.body

        let checkstudent = await Students.findOne({ where: { userID: req.user.id } });
        if (!checkstudent) {
            return res.status(400).json({ message: 'Only authorized users can request lecturer recommendations' });
        }
        await Recommendations.create({ lecturerID: lecturerID, studentID: checkstudent.id });
        return res.status(201).json({
            message: 'New recommendation request added successfully',
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while adding new recommendation request.' });
        }
    }
};
