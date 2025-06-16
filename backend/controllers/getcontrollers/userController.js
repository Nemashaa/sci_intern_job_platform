const { Sequelize } = require('sequelize');
const { Users, Students, Employers, Lecturers, JobPosts, Applications, Recommendations } = require('../../models');

exports.user = async (req, res) => {
    try {
        let user = await Users.findByPk(req.user.id, {
            attributes: ['email', 'profilePicture']
        });

        if (!user) {
            return res.status(404).send({ message: 'User does not exist' });
        }

        const models = [
            {
                model: Students,
                include: [
                    {
                        model: Applications,
                        where: { studentID: Sequelize.col('Students.id') },
                        required: false
                    },
                    {
                        model: Recommendations,
                        where: { studentID: Sequelize.col('Students.id') },
                        required: false,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    }
                ],
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            },
            {
                model: Employers,
                include: [
                    {
                        model: JobPosts,
                        where: { employerID: Sequelize.col('Employers.id') },
                        required: false,
                        attributes: { exclude: ['createdAt', 'updatedAt'] },
                        include: [
                            {
                                model: Applications,
                                where: { jobPostID: Sequelize.col('JobPosts.id') },
                                required: false, // Include even if no applications exist
                                attributes: { exclude: ['createdAt', 'updatedAt'] }
                            }
                        ]
                    }
                ],
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            },
            {
                model: Lecturers,
                include: [
                    {
                        model: Recommendations,
                        where: { lecturerID: Sequelize.col('Lecturers.id') },
                        required: false,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    }
                ],
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            }
        ];

        let dbUser = null;

        for (const { model, include, attributes } of models) {
            dbUser = await model.findOne({
                where: { userID: req.user.id },
                include: include,
                attributes: attributes
            });

            if (dbUser) break; // If a match is found, break out of the loop
        }

        // If no matching user found
        if (!dbUser) {
            return res.status(400).send({ message: 'User does not exist in any role' });
        }

        // Return the user data with the associated role-specific data
        return res.status(200).send({
            user: user,      // Send the user details
            details: dbUser   // Send the dbUser details (role-specific data)
        });        

    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while getting user details.' });
        }
    }
};
