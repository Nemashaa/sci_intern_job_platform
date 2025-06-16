import Cancel from "./Cancel";
import PropTypes from "prop-types";
import "./RequestRecommendation.css";

const RequestRecommendation = ({ className = "" }) => {
  return (
    <div className={`requestrecommendation ${className}`}>
      <div className="requestrecommendation-child" />
      <div className="request-recommendation">Request Recommendation</div>
      <div className="add-lecture-parent">
        <div className="add-lecture">Add Lecture</div>
        <input className="rectangle-input" type="text" />
        
      <input
        className="requestrecommendation-item1"
        placeholder="Description"
        type="text"
      />
      </div>
     
      <Cancel property1="Default" cancel="Request" />
    </div>
  );
};

RequestRecommendation.propTypes = {
  className: PropTypes.string,
};

export default RequestRecommendation;
