const { Lecturers, Recommendations } = require('../../models');

exports.recommendation = async (req, res) => {
    try {
        console.log(req.body);

        const { studentID, description, visibility } = req.body;

        let checklecturer = await Lecturers.findOne({ where: { userID: req.user.id } });

        if (!checklecturer) {

            return res.status(400).send({ message: 'User cannot be found' });

        }
        
        let recommendation = await Recommendations.findOne({where: {lecturerID: checklecturer.id, studentID: studentID }})

        recommendation.description = description;
        recommendation.visibility = visibility;
        recommendation.status = 'complete'
        await recommendation.save();

        res.status(200).send({ message: 'Details changed successfully' });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while changing Details.' });
        }
    }
};
