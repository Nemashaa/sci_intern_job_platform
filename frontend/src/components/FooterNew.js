import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './FooterNew.css';

const FooterNew = ({footerTop}) => {
  const footerStyle = useMemo(() => {
      return {
        top: footerTop,
      };
    }, [footerTop]);
    
  return (
    <footer className="footer-container" style={footerStyle}>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Science Faculty Internship Portal</h2>
          <p>
            A platform to explore career opportunities, internships, and job
            openings tailored for science students.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/jobs">Employement Partners</Link></li>
            <li><Link to="/internships">Career Opportunities</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@sciencefaculty.edu</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: Faculty of Science, University XYZ, Country</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Science Faculty Internship Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNew;
