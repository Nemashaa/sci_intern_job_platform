import Cancel1 from "./Cancel1";
import CreateMore from "./CreateMore";
import PropTypes from "prop-types";
import "./GiveRecommendation.css";

const GiveRecommendation = ({ className = "" }) => {
  return (
    <div className={`giverecommendation ${className}`}>
      <div className="download1">
        <div className="download1-inner">
          <div className="write-recommendation-wrapper">
            <b className="write-recommendation">Write Recommendation</b>
          </div>
        </div>
        <div className="or-parent">
          <div className="or">{`or `}</div>
          <Cancel1 property1="Default" />
          <CreateMore
            property1="Default"
            showGroupDiv
            createAddMore="Give Recommendation"
          />
          <CreateMore
            property1="Default"
            createMoreLeft="0px"
            createMoreWidth="210px"
            showGroupDiv={false}
            createAddMore="Send me a test"
          />
        </div>
        <input className="download1-child" type="text" />
        <div className="add-student-parent">
          <div className="add-student">Add Student</div>
          <input className="rectangle-input" type="text" />
        </div>
      </div>
    </div>
  );
};

GiveRecommendation.propTypes = {
  className: PropTypes.string,
};

export default GiveRecommendation;
