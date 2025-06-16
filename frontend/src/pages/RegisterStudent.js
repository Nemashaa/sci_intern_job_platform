import React, { useState } from 'react';
import Axios from 'axios';
import './Register.css';
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; // Import Link for navigation
import FooterNew from '../components/FooterNew';
import HeaderBeforeLog from '../components/HeaderBeforeLog';

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    majoringSubjects: '',
    degreeProgram: '',
    yearOfStudy: '',
    sNumber: '',
    email: '',
    password: '',
    userRole: 'student',
  });

  const [submitErrors, setSubmitErrors] = useState({
    firstName: '',
    lastName: '',
    majoringSubjects: '',
    degreeProgram: '',
    yearOfStudy: '',
    sNumber: '',
    email: '',
    password: '',
    general: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.majoringSubjects) errors.majoringSubjects = 'Majoring subjects are required';
    if (!formData.degreeProgram) errors.degreeProgram = 'Degree program is required';
    if (!formData.yearOfStudy || isNaN(formData.yearOfStudy)) errors.yearOfStudy = 'Valid year of study is required';
    if (!formData.sNumber) errors.sNumber = 'Student number is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) errors.email = 'Invalid email format';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setSubmitErrors(errors);
      return;
    }

    try {
      const response = await Axios.post('http://localhost:3001/api/users/register', formData);
      if (response.status === 201) {
        alert('Student registered successfully!');
        // Reset form data after successful registration
        setFormData({
          firstName: '',
          lastName: '',
          majoringSubjects: '',
          degreeProgram: '',
          yearOfStudy: '',
          sNumber: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error registering student', error);
      setSubmitErrors({ ...submitErrors, general: 'Error occurred during registration.' });
    }
  };

  return (
    <>
      <div className="register-container">
        <HeaderBeforeLog />
        <div className="image-container"></div>
        <div className="form-container">
          <h1 className="register-header">Student Registration</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {submitErrors.firstName && <span className="error">{submitErrors.firstName}</span>}
              </div>

              <div className="form-group col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                />
                {submitErrors.lastName && <span className="error">{submitErrors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="majoringSubjects">Majoring Subjects</label>
              <input
                type="text"
                id="majoringSubjects"
                name="majoringSubjects"
                value={formData.majoringSubjects}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.majoringSubjects && <span className="error">{submitErrors.majoringSubjects}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="degreeProgram">Degree Program</label>
              <input
                type="text"
                id="degreeProgram"
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.degreeProgram && <span className="error">{submitErrors.degreeProgram}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="yearOfStudy">Year of Study</label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Select Year</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
              </select>
              {submitErrors.yearOfStudy && <span className="error">{submitErrors.yearOfStudy}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="sNumber">Student Number</label>
              <input
                type="text"
                id="sNumber"
                name="sNumber"
                value={formData.sNumber}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.sNumber && <span className="error">{submitErrors.sNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">University Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.email && <span className="error">{submitErrors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.password && <span className="error">{submitErrors.password}</span>}
            </div>

            {submitErrors.general && <div className="general-error">{submitErrors.general}</div>}

            <button type="submit" className="register-button">Register</button>
          </form>
          <div className="login-link">
            <p>Already registered? <Link to="/login">Login here</Link></p>
          </div>
        </div>
      </div>
      <FooterNew />
    </>
  );
};

export default RegisterStudent;
