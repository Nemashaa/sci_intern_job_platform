import { useState, useCallback } from "react";
import RequestRecommendation from "../components/RequestRecommendation";
import PortalPopup from "../components/PortalPopup";
import Group from "../components/Group";
import Footer from "../components/Footer";
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import Selectsub from "../components/Selectsub";
import "./StudentProfile.css";

const StudentProfile = () => {
  const [isRequestRecommendationOpen, setRequestRecommendationOpen] =
    useState(false);

  const openRequestRecommendation = useCallback(() => {
    setRequestRecommendationOpen(true);
  }, []);

  const closeRequestRecommendation = useCallback(() => {
    setRequestRecommendationOpen(false);
  }, []);

  return (
    <>
      <div className="studentprofile">
        <div className="background2" />
        <div className="background3" />
        <div className="savechangesbutton">
          <b className="save-changes">save changes</b>
        </div>
        <div className="savechangesbutton1" onClick={openRequestRecommendation}>
          <b className="request-recommendation">
            <p className="request">{`Request `}</p>
            <p className="request">Recommendation</p>
          </b>
        </div>
        <img
          className="topicbackground1-icon"
          alt=""
          src="/topicbackground1.svg"
        />
        <div className="your-name-here">Your Name Here</div>
        <div className="account-type-show">Account Type show here</div>
        <div className="backgroundlogo" />
        <img className="profilelogo-icon" alt="" src="/profilelogo@2x.png" />
        <b className="name">Name :</b>
        <b className="email-address">Email Address :</b>
        <b className="gender">Gender :</b>
        <b className="contact-number">Contact Number :</b>
        <b className="address">Address :</b>
        <b className="account-type">Account Type :</b>
        <b className="change-password">{`Change Password `}</b>
        <b className="bio">BIO</b>
        <div className="nameshow">
          <b className="save-changes">Name will be show here</b>
        </div>
        <div className="emailshow">
          <b className="email-address-will">Email address will be show here</b>
        </div>
        <div className="gendershow">
          <b className="save-changes">Gender will be show here</b>
        </div>
        <div className="numbershow">
          <b className="save-changes">Number will be show here</b>
        </div>
        <div className="addressshow">
          <b className="save-changes">Address will be show here</b>
        </div>
        <div className="accounttypeshow">
          <b className="save-changes">Acc Type will be show here</b>
        </div>
        <b className="editname">edit</b>
        <b className="editemail">edit</b>
        <b className="editgender">edit</b>
        <b className="editcontactnumber">edit</b>
        <b className="editaddress">edit</b>
        <img className="editlogo-1-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-2-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-3-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-4-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-5-icon" alt="" src="/editlogo-1@2x.png" />
        <div className="editaddress-parent">
          <b className="editaddress1">edit</b>
          <img className="editlogo-6-icon" alt="" src="/editlogo-1@2x.png" />
        </div>
        <div className="editaddress-group">
          <b className="editaddress1">edit</b>
          <img className="editlogo-6-icon" alt="" src="/editlogo-1@2x.png" />
        </div>
        <div className="pleasecontactus">
          If you have any issue with your details, please contact us
        </div>
        <Group />
        <Footer footerTop="2545px" footerPosition="absolute" footerLeft="0px" />
        <HeaderAfterLogStaff headerAfterLogStaffTop="0px" />
        <div className="studentprofile-child" />
        <b className="b">..............</b>
        <Selectsub property1="Default" />
        <div
          className="add-your-cv-wrapper"
          onClick={openRequestRecommendation}
        >
          <b className="add-your-cv">Add Your CV</b>
        </div>
      </div>
      {isRequestRecommendationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRequestRecommendation}
        >
          <RequestRecommendation onClose={closeRequestRecommendation} />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentProfile;
