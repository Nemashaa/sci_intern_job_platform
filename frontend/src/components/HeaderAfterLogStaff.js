import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./HeaderAfterLogStaff.css";

const HeaderAfterLogStaff = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogOutContainerClick = useCallback(() => {
    navigate("/");// Please sync "HomePage" to the project
  }, [navigate]);

  const onLogLogo1ImageClick = useCallback(() => {
    navigate("/StudentProfile");// Please sync "StudentProfile" to the project
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/student-home");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutn");
  }, [navigate]);

  const onRegistrationClick = useCallback(() => {
      navigate("/Registration");
  }, [navigate]);


  const onSearchInternshipClick = useCallback(() => {
    // Please sync "SearchJob" to the project
  }, []);

  return (
    <div className={`headerafterlogstaff ${className}`}>
      <div className="headerback" />
      <img className="unilogo-icon" alt="" src="/unilogo@2x.png" />
      <div className="logout" onClick={onLogOutContainerClick}>
        <b className="log-out">Log out</b>
      </div>
      <img className="uopname-icon" alt="" src="/uopname@2x.png" />
      <img
        className="loglogo-1-icon"
        alt=""
        src="/loglogo-1@2x.png"
        onClick={onLogLogo1ImageClick}
      />
      <div className="navigationbar">
        <div className="naviback" />
        <button className="home" onClick={onHomeClick}>
          Home
        </button>
        <button className="about-us2" onClick={onAboutUsClick}>
          About Us
        </button>
        <button className="contact-us2">
          <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
        </button>
        <button className="employee2">Employement Partners</button>
      </div>
      <button className="search-internship">
        <Link to="/jobs" style={{ color: 'inherit', textDecoration: 'none' }}>Career Opportunities</Link>
      </button>
      <div className="internship-and-job-container">
        <p className="internship-and-job">
          Career Opportunities Portal
        </p>
        <p className="faculty-of-science2">
          Faculty of Science University of Peradeniya
        </p>
      </div>
    </div>
  );
};

HeaderAfterLogStaff.propTypes = {
  className: PropTypes.string,
};

export default HeaderAfterLogStaff;
