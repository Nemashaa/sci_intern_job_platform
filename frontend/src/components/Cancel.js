import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Cancel.css";

const Cancel = ({
  className = "",
  property1 = "Default",
  cancelTop,
  cancelLeft,
  rectangleDivBackgroundColor,
  cancel,
  cancelFontSize,
}) => {
  const cancelStyle = useMemo(() => {
    return {
      top: cancelTop,
      left: cancelLeft,
    };
  }, [cancelTop, cancelLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const cancel1Style = useMemo(() => {
    return {
      fontSize: cancelFontSize,
    };
  }, [cancelFontSize]);

  return (
    <div
      className={`cancel1 ${className}`}
      data-property1={property1}
      style={cancelStyle}
    >
      <div className="group-div">
        <div className="rectangle-div" style={rectangleDivStyle} />
        <div className="cancel" style={cancel1Style}>
          {cancel}
        </div>
      </div>
    </div>
  );
};

Cancel.propTypes = {
  className: PropTypes.string,
  cancel: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  cancelTop: PropTypes.string,
  cancelLeft: PropTypes.string,
  rectangleDivBackgroundColor: PropTypes.string,
  cancelFontSize: PropTypes.string,
};

export default Cancel;
