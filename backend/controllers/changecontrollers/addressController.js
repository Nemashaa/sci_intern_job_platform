const { Customers, Employees, Addresses } = require('../../models');

exports.address = async (req, res) => {
    try {
        const { contactNumber, recipientName, addressNumber, street, city, province, zipCode, isDefault } = req.body;

        if (!contactNumber || !recipientName || !addressNumber || !street || !city || !province || !zipCode || !isDefault) {
            return res.status(400).send({ error: "Fields can't be empty." });
        }
        let address;
        let dbuser = await Customers.findOne({ where: { userID: req.user.id } });
        if (!dbuser) {
            dbuser = await Employees.findOne({ where: { userID: req.user.id } });
            if (!dbuser) {
                return res.status(400).send({ message: 'User Cannot found' });
            }
        }
        if (!dbuser.addressID) {
            address = await Addresses.create({
                contactNumber: contactNumber,
                recipientName: recipientName,
                addressNumber: addressNumber,
                street: street,
                city: city,
                province: province,
                zipCode: zipCode,
                isDefault: isDefault
            });
            dbuser.addressID = address.id;
            await dbuser.save();
            return res.status(200).send({ message: 'Address added successfully' });
        }
        address = await Addresses.findByPk(dbuser.addressID);

        address.contactNumber = contactNumber;
        address.recipientName = recipientName;
        address.addressNumber = addressNumber;
        address.street = street;
        address.city = city;
        address.province = province;
        address.zipCode = zipCode;
        address.isDefault = isDefault;

        await address.save();
        res.status(200).send({ message: 'Address changed successfully' });
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'Validation error: ' + error.message });
        } else {
            res.status(500).send({ error: 'An error occurred while changing Details.' });
        }
    }
};
