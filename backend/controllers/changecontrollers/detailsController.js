const { Customers, Employees } = require('../../models');

exports.details = async (req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName } = req.body;

        if (!firstName && !lastName) {
            return res.status(400).send({ error: "Both can't be empty." });
        }

        let dbuser = await Customers.findOne({ where: { userID: req.user.id } });
        if (!dbuser) {
            dbuser = await Employees.findOne({ where: { userID: req.user.id } });
            if (!dbuser) {
                return res.status(400).send({ message: 'User Cannot found' });
            }
        }
        dbuser.firstName = firstName;
        dbuser.lastName = lastName;
        await dbuser.save();

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
