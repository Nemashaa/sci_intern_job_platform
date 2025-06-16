import PropTypes from "prop-types";
import "./Recommend.css";

const Recommend = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`recommend ${className}`} data-property1={property1}>
      <div className="recommend-child" />
      <div className="recommend-item" />
      <div className="recommend-inner" />
      <div className="normal">Normal</div>
      <div className="low">Low</div>
      <div className="high">High</div>
      <div className="recommend-child1" />
      <img className="recommend-child2" alt="" src="/polygon-17.svg" />
      <div className="my-recommendations">My Recommendations</div>
    </div>
  );
};

Recommend.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Recommend;
