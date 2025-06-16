import PropTypes from "prop-types";
import "./Next.css";

const Next = ({ className = "", property1 = "Default" }) => {
  return (
    <div className={`next2 ${className}`} data-property1={property1}>
      <div className="next-wrapper">
        <div className="next">
          <div className="next-child" />
        </div>
      </div>
      <div className="next1" />
    </div>
  );
};

Next.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Next;
