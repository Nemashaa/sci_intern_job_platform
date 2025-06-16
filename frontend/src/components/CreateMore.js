import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CreateMore.css";

const CreateMore = ({
  className = "",
  property1 = "Default",
  createMoreLeft,
  createMoreWidth,
  showGroupDiv,
  createAddMore,
}) => {
  const createMoreStyle = useMemo(() => {
    return {
      left: createMoreLeft,
      width: createMoreWidth,
    };
  }, [createMoreLeft, createMoreWidth]);

  return (
    <div
      className={`create-more ${className}`}
      data-property1={property1}
      style={createMoreStyle}
    >
      {showGroupDiv && (
        <div className="rectangle-parent2">
          <div className="group-child8" />
          <div className="create-add">{createAddMore}</div>
        </div>
      )}
    </div>
  );
};

CreateMore.propTypes = {
  className: PropTypes.string,
  showGroupDiv: PropTypes.bool,
  createAddMore: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  createMoreLeft: PropTypes.string,
  createMoreWidth: PropTypes.string,
};

export default CreateMore;
