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
import AboutUs from '../components/AboutUs';

function Home() {

    return (
        <div className="page-container">
            {/* Header Section with Image */}
            <header className="">
                <HeaderBeforeLog />
            </header>

            <AboutUs/>

            {/* <Footer footerTop="120vh" /> */}
            <FooterNew/>
        </div>
    );
}

export default Home;
