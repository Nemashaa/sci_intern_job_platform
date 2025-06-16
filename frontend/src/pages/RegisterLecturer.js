import React, { useState } from 'react';
import Axios from 'axios';
import './Register.css';
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; // Import Link for navigation
import FooterNew from '../components/FooterNew';
import HeaderBeforeLog from '../components/HeaderBeforeLog';

const RegisterLecturer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    education: '',
    description: '',
    department: '',
    contactNumber: '',
    email: '',
    password: '',
    userRole: 'lecturer',
  });

  const [submitErrors, setSubmitErrors] = useState({
    firstName: '',
    lastName: '',
    title: '',
    education: '',
    description: '',
    department: '',
    contactNumber: '',
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
    if (!formData.title) errors.title = 'Position/Title is required';
    if (!formData.education) errors.education = 'Degree(s) are required';
    if (!formData.description) errors.description = 'Description is required';
    if (!formData.department) errors.department = 'Department is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact number is required';
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
        alert('Lecturer registered successfully!');
        // Reset form data after successful registration
        setFormData({
          firstName: '',
          lastName: '',
          title: '',
          education: '',
          description: '',
          department: '',
          contactNumber: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error registering lecturer', error);
      setSubmitErrors({ ...submitErrors, general: 'Error occurred during registration.' });
    }
  };

  return (
    <>
      <div className="register-container">
        <HeaderBeforeLog />
        <div className="image-container"></div>
        <div className="form-container">
          <h1 className="register-header">Lecturer Registration</h1>
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
              <label htmlFor="title">Position/Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.title && <span className="error">{submitErrors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="education">Degree(s)</label>
              <input
                type="text"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.education && <span className="error">{submitErrors.education}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.description && <span className="error">{submitErrors.description}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.department && <span className="error">{submitErrors.department}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.contactNumber && <span className="error">{submitErrors.contactNumber}</span>}
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

export default RegisterLecturer;
