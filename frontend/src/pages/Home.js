import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../config/AuthContext';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './StudentHome.css'; // Import custom CSS file
import HeaderAfterLogStaff from '../components/HeaderAfterLogStaff';
import Footer from '../components/Footer';
import Axios from 'axios';
import HeaderBeforeLog from '../components/HeaderBeforeLog';
import FooterNew from '../components/FooterNew';

function Home() {

    return (
        <div className="page-container">
            {/* Header Section with Image */}
            <header className="page-header">
                <HeaderBeforeLog />
                <img
                    src="/home.jpg"
                    alt="Header Background"
                    className="header-image"
                />
                <div className="header-text">
                    <h1>Welcome to Our Internship & Job Opportunity Platform</h1>
                </div>
            </header>

          
            {/* <Footer footerTop="120vh" /> */}
            <FooterNew/>
        </div>
    );
}

export default Home;
