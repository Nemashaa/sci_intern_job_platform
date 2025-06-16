import PropTypes from "prop-types";
import "./FindUsOn.css";

const FindUsOn = ({ className = "" }) => {
  return (
    <div className={`finduson ${className}`}>
      <div className="find-us-on">Find Us On</div>
      <a
        className="twitlogo"
        href="https://twitter.com/DVC_Peradeniya/status/1620995132203089921?lang=en"
        target="_blank"
      />
      <a
        className="instalogo"
        href="https://www.instagram.com/universityofperadeniya/"
        target="_blank"
      />
      <a
        className="fblogo"
        href="https://www.facebook.com/UniversityOfPeradeniya/"
        target="_blank"
      />
      <a
        className="ytlogo"
        href="https://www.youtube.com/channel/UCxN_hZh8t5uFGW7kwahQwqQ"
        target="_blank"
      />
      <a
        className="inlogo"
        href="https://www.linkedin.com/school/university-of-peradeniya/"
        target="_blank"
      />
    </div>
  );
};

FindUsOn.propTypes = {
  className: PropTypes.string,
};

export default FindUsOn;
