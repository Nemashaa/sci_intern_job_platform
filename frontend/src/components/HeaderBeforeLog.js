import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeaderBeforeLog.css";

const HeaderBeforeLog = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLoginBackClick = useCallback(() => {
    navigate("/loginpage1");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutn");
  }, [navigate]);

  const onSearchInternshipClick = useCallback(() => {
    // Please sync "SearchJob" to the project
  }, []);

  return (
    <div className={`headerbeforelog ${className}`}>
      <div className="headerback1" />
      <img className="uopname-icon1" alt="" src="/uopname1@2x.png" />
      <div className="internship-and-job-container1">
        <p className="internship-and-job1">
          Career Opportunities Portal
        </p>
        <p className="faculty-of-science5">
          Faculty of Science University of Peradeniya
        </p>
      </div>
      <img className="unilogo-icon1" alt="" src="/unilogo@2x.png" />
      <button className="loginback" onClick={onLoginBackClick}>
        <div className="log-in">Log In</div>
      </button>
      <div className="signup">
        <button className="signupback" />
        <button className="sign-up" to="/signup"> <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link></button>
      </div>
      <div className="navigationbar1">
        <div className="naviback1" />
        <button className="home1"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></button>
        <button className="about-us1" onClick={onAboutUsClick}>
          About Us
        </button>
        <button className="employee1">Employement Partners</button>
        <button className="contact-us1">
          <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

HeaderBeforeLog.propTypes = {
  className: PropTypes.string,
};

export default HeaderBeforeLog;
