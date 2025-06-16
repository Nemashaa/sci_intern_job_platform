import PropTypes from "prop-types";
import "./Previous.css";

const Previous = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`previous1 ${className}`} data-property1={property1}>
      <div className="rectangle-parent3">
        <div className="group-child9" />
        <div className="previous">Post</div>
      </div>
    </div>
  );
};

Previous.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Previous;
