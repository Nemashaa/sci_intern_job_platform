const { Users, Students, Lecturers, Employers, Recommendations, JobPosts } = require('../../models');

exports.getUsers = async (req, res) => {
    try {
        const { userRole, userID } = req.query; // Use query parameters for flexibility

        let users;

        // Get users by role
        if (userRole) {
            let includeModel = null;

            // Determine the model to include based on userRole
            if (userRole === 'student') {
                includeModel = {
                    model: Students,
                    include: [
                        {
                            model: Recommendations, // Include recommendations for students
                            required: false,
                        }
                    ]
                };
            } else if (userRole === 'employer') {
                includeModel = {
                    model: Employers,
                    include: [
                        {
                            model: JobPosts, // Include job posts for employers
                            required: false,
                        }
                    ]
                };
            } else if (userRole === 'lecturer') {
                includeModel = {
                    model: Lecturers,
                    include: [
                        {
                            model: Recommendations, // Include recommendations for lecturers
                            required: false,
                        }
                    ]
                };
            }

            // Fetch users with role-specific details
            users = await Users.findAll({
                where: { userGroup: userRole }, // Filter by user role
                attributes: ['id', 'email', 'userGroup'], // Limit returned attributes
                include: includeModel ? [includeModel] : [] // Dynamically include related data
            });
        }
        // Get user by user ID
        else if (userID) {
            const models = [Students, Lecturers, Employers];
            let userDetails = null;

            // Search for the user in each model
            for (const model of models) {
                userDetails = await model.findOne({
                    where: { userID }, // Match userID from the model
                    include: [
                        {
                            model: Users, // Include user details
                            attributes: ['email', 'profilePicture'], // Limit returned attributes
                        }
                    ]
                });

                if (userDetails) {
                    users = userDetails; // Set the matching user details
                    break; // Exit loop if a match is found
                }
            }

            // If no matching user found
            if (!users) {
                return res.status(404).json({ message: 'User does not exist in any role' });
            }
        }
        // Get all users
        else {
            users = await Users.findAll({
                attributes: ['id', 'email', 'userGroup'], // Limit returned attributes for Users
                include: [
                    {
                        model: Students,
                        required: false, // Include only if the user is a student
                    },
                    {
                        model: Employers,
                        required: false, // Include only if the user is an employer
                    },
                    {
                        model: Lecturers,
                        required: false, // Include only if the user is a lecturer
                    }
                ]
            });

            // If no users found, return a 404 response
            if (!users || users.length === 0) {
                return res.status(404).json({ message: 'No users found' });
            }

        }

        // If no users found, return a 404 response
        if (!users || (Array.isArray(users) && users.length === 0)) {
            return res.status(404).json({ message: 'No users found' });
        }

        // Send the list of users as a response
        return res.status(200).json(users);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
};
