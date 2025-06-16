import React, { useState } from 'react';
import Axios from 'axios';
import './Register.css';
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; // Import Link for navigation
import FooterNew from '../components/FooterNew';
import HeaderBeforeLog from '../components/HeaderBeforeLog';

const RegisterationEmployer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    companyDescription: '',
    address: {
      contactNumber: '',
      addressNumber: '',
      street: '',
      city: '',
      province: '',
    },
    email: '',
    password: '',
    userRole: 'employer',  // Default userRole as 'employer'
  });

  const [submitErrors, setSubmitErrors] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    companyDescription: '',
    address: {
      contactNumber: '',
      addressNumber: '',
      street: '',
      city: '',
      province: '',
    },
    email: '',
    password: '',
    general: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is an address subfield and update it properly
    if (name.startsWith('address')) {
      const field = name.split('.')[1];  // Get the second part of the name (e.g., 'contactNumber')
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,  // Dynamically update the specific field
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.jobTitle) errors.jobTitle = 'Job title is required';
    if (!formData.companyName) errors.companyName = 'Company name is required';
    if (!formData.companyDescription) errors.companyDescription = 'Company description is required';
    if (!formData.address.contactNumber) errors.address.contactNumber = 'Contact number is required';
    if (!formData.address.addressNumber) errors.address.addressNumber = 'Address number is required';
    if (!formData.address.street) errors.address.street = 'Street is required';
    if (!formData.address.city) errors.address.city = 'City is required';
    if (!formData.address.province) errors.address.province = 'Province is required';
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
        alert('Employer registered successfully!');
        // Reset form data after successful registration
        setFormData({
          firstName: '',
          lastName: '',
          jobTitle: '',
          companyName: '',
          companyDescription: '',
          address: {
            contactNumber: '',
            addressNumber: '',
            street: '',
            city: '',
            province: '',
          },
          email: '',
          password: '',
          userRole: 'employer',
        });
      }
    } catch (error) {
      console.error('Error registering employer', error);
      setSubmitErrors({ ...submitErrors, general: 'Error occurred during registration.' });
    }
  };

  return (
    <>
      <div className="register-container">
        <HeaderBeforeLog />
        <div className="image-container"></div>
        <div className="form-container">
          <h1 className="register-header">Employment Partner Registration</h1>
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
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.jobTitle && <span className="error">{submitErrors.jobTitle}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.companyName && <span className="error">{submitErrors.companyName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="companyDescription">Company Description</label>
              <input
                type="text"
                id="companyDescription"
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.companyDescription && <span className="error">{submitErrors.companyDescription}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address.contactNumber">Contact Number</label>
              <input
                type="text"
                id="address.contactNumber"
                name="address.contactNumber"
                value={formData.address.contactNumber}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.address.contactNumber && <span className="error">{submitErrors.address.contactNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address.addressNumber">Address Number</label>
              <input
                type="text"
                id="address.addressNumber"
                name="address.addressNumber"
                value={formData.address.addressNumber}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.address.addressNumber && <span className="error">{submitErrors.address.addressNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address.street">Street</label>
              <input
                type="text"
                id="address.street"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.address.street && <span className="error">{submitErrors.address.street}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address.city">City</label>
              <input
                type="text"
                id="address.city"
                name="address.city"
                value={formData.address.city}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.address.city && <span className="error">{submitErrors.address.city}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address.province">Province</label>
              <input
                type="text"
                id="address.province"
                name="address.province"
                value={formData.address.province}
                onChange={handleInputChange}
                className="form-input"
              />
              {submitErrors.address.province && <span className="error">{submitErrors.address.province}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
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

export default RegisterationEmployer;
