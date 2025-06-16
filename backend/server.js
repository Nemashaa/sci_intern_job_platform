const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const changeRoutes = require('./routes/changeRoutes');
const getRoutes = require('./routes/getRoutes');
const addRoutes = require('./routes/addRoutes');
require('dotenv').config();
const cors = require('cors');

require('./config/passportConfig');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use('/api/users', authRoutes);
app.use('/api/change', changeRoutes);
app.use('/api/get', getRoutes);
app.use('/api/add', addRoutes);

app.use((error, req, res, next) => {
    console.error('General Error:', error.message);
    res.status(500).send('An internal server error occurred');
});

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then((req) => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});