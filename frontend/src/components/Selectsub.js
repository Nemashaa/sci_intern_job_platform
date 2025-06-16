import PropTypes from "prop-types";
import "./Selectsub.css";

const Selectsub = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`selectsub ${className}`} data-property1={property1}>
      <div className="rectangle-parent2">
        <div className="group-child7" />
        <div className="group-child8" />
        <div className="group-child9" />
        <div className="group-child10" />
        <div className="group-child11" />
        <div className="group-child12" />
        <div className="group-child13" />
        <img className="polygon-icon" alt="" src="/polygon-18.svg" />
        <div className="select-subjects">Select Subjects</div>
        <div className="category-6">Category 6</div>
        <div className="category-5">Category 5</div>
        <div className="category-4">Category 4</div>
        <div className="category-3">Category 3</div>
        <div className="category-2">Category 2</div>
        <div className="category-1">Category 1</div>
      </div>
    </div>
  );
};

Selectsub.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Selectsub;
