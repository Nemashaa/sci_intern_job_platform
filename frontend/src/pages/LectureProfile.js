import { useState, useCallback } from "react";
import GiveRecommendation from "../components/GiveRecommendation";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import Group1 from "../components/Group1";
import Recommend from "../components/Recommend";
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import "./LectureProfile.css";

const LectureProfile = () => {
  const [isGiveRecommendationOpen, setGiveRecommendationOpen] = useState(false);

  const openGiveRecommendation = useCallback(() => {
    setGiveRecommendationOpen(true);
  }, []);

  const closeGiveRecommendation = useCallback(() => {
    setGiveRecommendationOpen(false);
  }, []);

  return (
    <>
      <div className="lectureprofile">
        <div className="pleasecontactus1">
          If you have any issue with your details, please contact us
        </div>
        <Footer footerTop="2545px" footerPosition="absolute" footerLeft="0px" />
        <div className="background21" />
        <div className="background31" />
        <div className="savechangesbutton2">
          <b className="save-changes1">save changes</b>
        </div>
        <div className="savechangesbutton3" onClick={openGiveRecommendation}>
          <b className="save-changes1">Give Recommendation</b>
        </div>
        <img
          className="topicbackground1-icon1"
          alt=""
          src="/topicbackground1.svg"
        />
        <div className="your-name-here1">Your Name Here</div>
        <div className="account-type-show1">Account Type show here</div>
        <div className="backgroundlogo1" />
        <img className="profilelogo-icon1" alt="" src="/profilelogo@2x.png" />
        <b className="name1">Name :</b>
        <b className="email-address1">Email Address :</b>
        <b className="gender1">Gender :</b>
        <b className="contact-number1">Contact Number :</b>
        <b className="address1">Address :</b>
        <b className="account-type1">Account Type :</b>
        <b className="change-password1">{`Change Password `}</b>
        <b className="bio1">BIO</b>
        <div className="nameshow1">
          <b className="save-changes1">Name will be show here</b>
        </div>
        <div className="emailshow1">
          <b className="email-address-will1">Email address will be show here</b>
        </div>
        <div className="gendershow1">
          <b className="save-changes1">Gender will be show here</b>
        </div>
        <div className="numbershow1">
          <b className="save-changes1">Number will be show here</b>
        </div>
        <div className="addressshow1">
          <b className="save-changes1">Address will be show here</b>
        </div>
        <div className="accounttypeshow1">
          <b className="save-changes1">Acc Type will be show here</b>
        </div>
        <b className="editname1">edit</b>
        <b className="editemail1">edit</b>
        <b className="editgender1">edit</b>
        <b className="editcontactnumber1">edit</b>
        <b className="editaddress3">edit</b>
        <img className="editlogo-6-icon2" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-7-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-8-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-9-icon" alt="" src="/editlogo-1@2x.png" />
        <img className="editlogo-10-icon" alt="" src="/editlogo-1@2x.png" />
        <div className="editaddress-container">
          <b className="editaddress4">edit</b>
          <img className="editlogo-6-icon3" alt="" src="/editlogo-1@2x.png" />
        </div>
        <div className="group-div">
          <b className="editaddress4">edit</b>
          <img className="editlogo-6-icon3" alt="" src="/editlogo-1@2x.png" />
        </div>
        <Group1 />
        <div className="lectureprofile-child" />
        <b className="b1">..............</b>
        <Recommend property1="Default" />
        <HeaderAfterLogStaff headerAfterLogStaffTop="-7px" />
      </div>
      {isGiveRecommendationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGiveRecommendation}
        >
          <GiveRecommendation onClose={closeGiveRecommendation} />
        </PortalPopup>
      )}
    </>
  );
};

export default LectureProfile;
