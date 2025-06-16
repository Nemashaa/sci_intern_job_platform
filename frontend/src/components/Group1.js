import PropTypes from "prop-types";
import "./Group1.css";

const Group1 = ({ className = "" }) => {
  return (
    <div className={`group011 ${className}`}>
      <b className="subject-area">Subject Area :</b>
      <b className="faculty1">Faculty :</b>
      <b className="department">Department :</b>
      <input
        className="enterregistrationnumber1"
        placeholder="X/XX/XXXX"
        type="text"
      />
      <input
        className="enterfaculty1"
        placeholder="Faculty of xxxxxxxxxxxx"
        type="text"
      />
      <input className="enteryear1" placeholder="x Year" type="number" />
      <div className="if-you-are1">If you are a Lecture</div>
    </div>
  );
};

Group1.propTypes = {
  className: PropTypes.string,
};

export default Group1;
