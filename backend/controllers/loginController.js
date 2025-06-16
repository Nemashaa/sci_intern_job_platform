const { Users } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ error: 'Please provide correct email and password.' });
        }
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        } else if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: 'Invalid credentials.' });
        }
        const token = jwt.sign({ id: user.id, role: user.userGroup }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ user: { id: user.id, email: user.email, role: user.userGroup }, token });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: error.errors.map(e => e.message) });
        }
        res.status(500).send({ error: 'An unexpected error occurred. Please try again later.' });
    }
};
