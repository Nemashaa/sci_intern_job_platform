const { Users, Students, Employers, Lecturers, Addresses } = require('../models');

exports.register = async (req, res) => {
    const { email, password, userRole } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, user group, and password.' });
    }

    try {
        let existingUser = await Users.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User account with this email address already exist.' });
        }
        if (userRole === "student") {
            return await registerStudent(userRole, email, password, req, res);
        } else if (userRole === "employer") {
            return await registerEmployer(userRole, email, password, req, res);
        } else if (userRole === "lecturer") {
            return await registerLecturer(userRole, email, password, req, res);
        }
        else {
            return res.status(400).json({ message: 'Unauthorized role for registration.', userRole });
        }
    } catch (error) {
        console.error(`Register Error: ${error.message}`);
        return res.status(500).json({ message: 'Server error while registering user.' });
    }
};

async function registerStudent(userRole, email, password, req, res) {
    const { firstName, lastName, majoringSubjects, degreeProgram, yearOfStudy, sNumber } = req.body

    const user = await Users.create({ email, password, userGroup: userRole });
    const student = await Students.create({
        userID: user.id, firstName: firstName, lastName: lastName, majoringSubjects: majoringSubjects,
        degreeProgram: degreeProgram, yearOfStudy: yearOfStudy, sNumber: sNumber
    });

    const userResult = { ...user.toJSON(), password: undefined };
    const studentResult = student.toJSON();

    return res.status(201).json({
        message: 'User registered successfully',
        user_id: userResult.id,
        student_id: studentResult.id,
    });
}

async function registerEmployer(userRole, email, password, req, res) {
    const { firstName, lastName, jobTitle, companyName, companyDescription, address } = req.body;
    const { contactNumber, addressNumber, street, city, province } = address;

    const user = await Users.create({ email, password, userGroup: userRole });
    const addressObject = await Addresses.create({ contactNumber, addressNumber, street, city, province })
    const employer = await Employers.create({
        userID: user.id,
        firstName,
        lastName,
        jobTitle,
        companyName,
        companyDescription,
        addressID: addressObject.id
    });

    const userResult = { ...user.toJSON(), password: undefined };
    const employerResult = employer.toJSON();

    return res.status(201).json({
        message: 'User registered successfully',
        user_id: userResult.id,
        employer_id: employerResult.id,
    });
}

async function registerLecturer(userRole, email, password, req, res) {
    const { contactNumber, firstName, lastName, title, education, description, department } = req.body;

    const user = await Users.create({ email, password, userGroup: userRole });
    const lecturer = await Lecturers.create({
        userID: user.id,
        contactNumber,
        firstName,
        lastName,
        title,
        education,
        description,
        department
    });

    const userResult = { ...user.toJSON(), password: undefined };
    const lecturerResult = lecturer.toJSON();

    return res.status(201).json({
        message: 'User registered successfully',
        user_id: userResult.id,
        lecturer_id: lecturerResult.id,
    });
}

// async function registerPharmacist(employeeID, email, password, req, res) {
//     if (req.body.user == '' || req.body.user.role !== "administrator") {
//         console.log(req.role);
//         return res.status(400).json({ message: 'Unauthorized creation of pharmacist accounts' });
//     }

//     const checkemp = await Employees.findByPk(employeeID);
//     if (!checkemp) {
//         return res.status(400).json({ message: `Cannot find employee with ID: ${employeeID}` });
//     }

//     const user = await Users.create({ email, password, userGroup: 'pharmacist' });
//     checkemp.userID = user.id;
//     await checkemp.save();

//     const userResult = { ...user.toJSON(), password: undefined };

//     return res.status(201).json({
//         message: 'User registered successfully',
//         user_id: userResult.id,
//         employee_id: checkemp.id,
//         employee_type: userResult.userGroup
//     });
// }
