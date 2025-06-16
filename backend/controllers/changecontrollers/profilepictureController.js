const multer = require('multer');
const fs = require('fs');
const { Users } = require('../../models');

let img_name;
let location = 'uploads/';

exports.setupUploadMiddleware = function(destinationPath = location) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destinationPath);
        },
        filename: function (req, file, cb) {
            img_name = file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop();
            cb(null, img_name);
        }
    });

    return multer({ storage: storage });
};

function deleteFile(filePath, callback) {
    fs.unlink(filePath, callback);
}


exports.profilepicture = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: "No picture was uploaded." });
        }
        const user = await Users.findByPk(req.user.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }
        if (user.profilePicture) {
            const oldFilePath = location+user.profilePicture;
            deleteFile(oldFilePath, (err) => {
                if (err) console.error("Failed to delete old profile picture:", err);
            });
        }
        user.profilePicture = img_name;
        await user.save();

        res.status(200).send({ message: 'Profile picture updated successfully' });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while updating the profile picture.' });
        }
    }
};