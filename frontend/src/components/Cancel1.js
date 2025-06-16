import PropTypes from "prop-types";
import "./Cancel1.css";

const Cancel1 = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`cancel3 ${className}`} data-property1={property1}>
      <div className="rectangle-parent1">
        <div className="group-child7" />
        <div className="cancel2">Cancel</div>
      </div>
    </div>
  );
};

Cancel1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Cancel1;
