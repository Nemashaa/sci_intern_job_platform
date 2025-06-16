const { Employees } = require('../models');

exports.empdetails = async (req, res) => {
    try {
        console.log(req.user.id);
        const { firstName, lastName, employeeID, emplyeeType } = req.body;

        if (req.user.role != "administrator") {
            return res.status(400).json({ message: 'Unauthorized creation of Employee accounts' });
        }

        if (!firstName && !lastName || !employeeID) {
            return res.status(400).send({ error: "Both can't be empty." });
        }

        let dbuser = await Employees.findByPk(employeeID);
        if (dbuser) {
            return res.status(400).send({ message: 'Employee already exists.' });
        }
        const emp = await Employees.create({  id: employeeID, firstName: firstName, lastName: lastName, emplyeeType: emplyeeType });
        return res.status(201).json({
            message: 'Employee registered successfully',
            employeeID: emp.id,
            firstName: emp.firstName,
            lastName: emp.lastName
        });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while registering Employee.' });
        }
    }
};
