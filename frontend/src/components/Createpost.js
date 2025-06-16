import Next from "./Next";
import Previous from "./Previous";
import Cancel from "./Cancel";
import PropTypes from "prop-types";
import "./Createpost.css";

const Createpost = ({ className = "", onClose }) => {
  return (
    <div className={`createpost ${className}`}>
      <div className="createpost-child" />
      <div className="create-new-post">Create New Post</div>
      <div className="post-title-parent">
        <div className="post-title">Post Title</div>
        <input className="group-child2" type="text" />
      </div>
      <div className="images-parent">
        <div className="post-title">Images</div>
        <div className="add">Add +</div>
        <input className="group-child3" type="text" />
      </div>
      <div className="job-role-parent">
        <div className="post-title">Job Role</div>
        <input className="group-child4" type="text" />
      </div>
      <div className="advertised-duration-parent">
        <div className="post-title">Advertised Duration</div>
        <input className="group-child4" type="text" />
      </div>
      <div className="description-parent">
        <div className="post-title">Description</div>
        <input className="group-child6" type="text" />
      </div>
      <Next property1="Default" />
      <Previous property1="Default" />
      <Cancel
        property1="Default"
        cancelTop="35px"
        cancelLeft="740px"
        rectangleDivBackgroundColor="#fff"
        cancel="Cancel"
        cancelFontSize="16px"
      />
    </div>
  );
};

Createpost.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Createpost;
