const { Users } = require('../../models');
const bcrypt = require('bcryptjs');

exports.password = async (req, res) => {
    try {
        console.log(req.user.id);
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return res.status(400).send({ error: 'Both old and new passwords are required.' });
        }
        const user = await Users.findByPk(req.user.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).send({ error: 'Old password is incorrect.' });
        }
        user.password = newPassword;
        await user.save();

        res.status(200).send({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while changing the password.' });
        }
    }
};
