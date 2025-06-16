import PropTypes from "prop-types";
import "./Group.css";

const Group = ({ className = "" }) => {
  return (
    <div className={`group01 ${className}`}>
      <b className="registration-number">Registration Number :</b>
      <b className="upload-cv">Upload CV :</b>
      <b className="subjects-you-have">Subjects you have followed :</b>
      <b className="degree-programme">Degree Programme :</b>
      <b className="faculty">Faculty :</b>
      <b className="year">Year :</b>
      <input
        className="enterregistrationnumber"
        placeholder="X/XX/XXXX"
        type="text"
      />
      <input
        className="enterfaculty"
        placeholder="Faculty of xxxxxxxxxxxx"
        type="text"
      />
      <input className="enteryear" placeholder="x Year" type="number" />
      <div className="if-you-are">If you are a Student</div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
