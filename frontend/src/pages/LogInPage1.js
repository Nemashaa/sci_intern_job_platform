import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import React, { useState } from 'react';
import { useAuth } from '../config/AuthContext';
import HeaderBeforeLog from "../components/HeaderBeforeLog";
import Footer from "../components/Footer";
import "./LogInPage1.css";
import FooterNew from "../components/FooterNew";

const LogInPage1 = () => {
  const { loginSuccess, loginFailure } = useAuth();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false, // state for toggling password visibility
  });

  const [submitErrors, setSubmitErrors] = useState({
    email: '',
    password: '',
    general: '',
  });


  const updateSubmitErrors = (errors) => {
    setSubmitErrors(errors);
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setValues((prevState) => ({
      ...values,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('login1');

    // Clear login errors
    setSubmitErrors({
      email: '',
      general: '',
    });
    try {
      console.log(values.password);

      const response = await Axios.post('http://localhost:3001/api/users/login/', {
        email: values.email,
        password: values.password,
      });
      console.log('login3');

      if (response.status === 200) {
        const { user, token } = response.data;
        console.log(user);
        loginSuccess(user, token);
        navigate('/student-home');
        console.log('Login successful');
      } else {
        loginFailure(response.data.error);
        updateSubmitErrors({ ...submitErrors, general: response.data.error });
        console.log('Login Failed');
      }
    } catch (error) {
      console.log('login');

      loginFailure(error.response.data.error);
      updateSubmitErrors({ ...submitErrors, general: error.response.data.error });
      console.error(error);
    }
  };

  const isValidLogin = () => {
    let isValid = true;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(values.email)) {
      updateSubmitErrors((prevErrors) => ({
        ...prevErrors,
        email: 'You have entered an invalid e-mail address. Please try again.'
      }));
      isValid = false;
    }

    return isValid;
  };

  const { showPassword } = values;

  const inputFields = [
    {
      name: 'email',
      type: 'text',
      label: 'Enter Email',
      autoComplete: 'username',
      error: submitErrors.email,
    },
    {
      name: 'password',
      type: showPassword ? 'text' : 'password',
      label: 'Enter Password',
      autoComplete: 'current-password',
    },
  ];

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/HomePageAfterStudent");
  }, [navigate]);

  /*const onLoginButtonContainerClick = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      const responseData = response.data;
      console.log(responseData)
      if (responseData.success === true) {
        console.log("Login successfull****");
        navigate("/Homepage2");
        alert("login success");
      } else {
        //navigate("/LoginPage");
       
        console.error("Login failed....", responseData.message || "Unknown error");
       
      }
    } catch (error) {
      alert("login failed");
      console.error("An error occurred during login:", error);
    }
  }, [username, password, navigate]);
  */

  return (
    <>
      <div className="loginpage1">
        <div className="loginbackground" />

        <b className="log-in-your">Welcome Back</b>
        <form onSubmit={handleSubmit}>
          <input className="usernameframe" name="email" type="text" placeholder="Enter email address" required onChange={onChange} />
          <input className="passwordframe" name="password" type="password" placeholder="Enter password" required onChange={onChange} />
        </form>
        <img className="loginimage-icon" alt="" src="/register.jpg" />
        <button className="loginbutton login" type="submit" onClick={handleSubmit}>
          {/* <b className="login">Login</b> */}
          Login
        </button>
        <HeaderBeforeLog />
        {/* <Footer footerTop="1636px" /> */}
      </div>
      <FooterNew/>
    </>
  );
};

export default LogInPage1;
