import { useMemo, useCallback } from "react";
import FindUsOn from "./FindUsOn";
import PropTypes from "prop-types";
import "./Footer.css";



const Footer = ({ className = "", footerTop }) => {
  const footerStyle = useMemo(() => {
    return {
      top: footerTop,
    };
  }, [footerTop]);

  const onSearchInternshipTextClick = useCallback(() => {
    // Please sync "SearchJob" to the project
  }, []);

  const onRegistrationTextClick = useCallback(() => {
   // navigate("/Registration");
  }, []);

  return (
    <div className={`footer ${className}`} style={footerStyle}>
      <img className="callicon" alt="" src="/callicon@2x.png" />
      <img className="locationicon" alt="" src="/locationicon@2x.png" />
      <div className="contactus2" />
      <b className="contact-us">Contact Us</b>
      <div className="faculty-of-science3">
        ©Faculty of Science , University of Peradeniya ,Peradeniya
      </div>
      <b className="faculty-of-science-container">
        <p className="university-of-peradeniya">Faculty of Science ,</p>
        <p className="university-of-peradeniya">University of Peradeniya,</p>
        <p className="peradeniya">Peradeniya</p>
      </b>
      <b className="telephone">Telephone</b>
      <b className="office-081-container">
        <p className="university-of-peradeniya">Office - 081 - 249 5162</p>
        <p className="peradeniya">Staff - 081 - 259 2764</p>
      </b>
      <div className="services">
        <div className="services1">Services</div>
        <div className="recommendation2">Recommendation</div>
      </div>
      <div className="search-internship1" onClick={onSearchInternshipTextClick}>
        Search Internship
      </div>
      <div
        className="registration1"
        onClick={onRegistrationTextClick}
      >{`Registration `}</div>
      <FindUsOn />
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  footerTop: PropTypes.string,
};

export default Footer;
