import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate and Routes
import './SignUp.css';
import HeaderBeforeLog from '../components/HeaderBeforeLog';
import FooterNew from '../components/FooterNew';

function SignUp() {
    const navigate = useNavigate(); // Use useNavigate hook

    const handleRoleSelect = (role) => {
        if (role === 'student') {
            navigate('/register-student');
        } else if (role === 'lecturer') {
            navigate('/register-lecturer');
        } else if (role === 'employer') {
            navigate('/register-employer');
        }
    };

    return (
        <>
            <div className="SignUp">
                <HeaderBeforeLog />
                <div className="container-signup">
                    <h2>Who are you?</h2>
                    <div className="btn-container">
                        <button className="signup-button" onClick={() => handleRoleSelect('student')}>Student</button>
                        <button className="signup-button" onClick={() => handleRoleSelect('lecturer')}>Lecturer</button>
                        <button className="signup-button" onClick={() => handleRoleSelect('employer')}>Employement Partner</button>
                    </div>
                </div>
            </div>
            <FooterNew />

        </>
    );
}

export default SignUp;
