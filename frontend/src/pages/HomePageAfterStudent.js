import { useState, useCallback } from "react";
import Createpost from "../components/Createpost";
import PortalPopup from "../components/PortalPopup";
import GiveRecommendation from "../components/GiveRecommendation";
import HeaderAfterLogStaff from "../components/HeaderAfterLogStaff";
import Footer from "../components/Footer";
import FacilityClick from "../components/FacilityClick";
import "./HomePageAfterStudent.css";
import ButtonGrid from "../components/ButtonGrid";

const HomePageAfterStudent = () => {
  const [isCreatepostOpen, setCreatepostOpen] = useState(false);
  const [isGiveRecommendationOpen, setGiveRecommendationOpen] = useState(false);

  const openCreatepost = useCallback(() => {
    setCreatepostOpen(true);
  }, []);

  const closeCreatepost = useCallback(() => {
    setCreatepostOpen(false);
  }, []);

  const openGiveRecommendation = useCallback(() => {
    setGiveRecommendationOpen(true);
  }, []);

  const closeGiveRecommendation = useCallback(() => {
    setGiveRecommendationOpen(false);
  }, []);

  const onDailyEventButtonContainerClick = useCallback(() => {
    // Please sync "SearchJob" to the project
  }, []);

  return (
    <>
      <div className="homepage-afterstudent">
        <div className="homepage-afterstudent-child" />
        <HeaderAfterLogStaff />
        <Footer />
        <img className="icon" alt="" src="/12@2x.png" />
        {/* <div className="sporteventbutton" onClick={openCreatepost}>
          <div className="pexels-thibault-trillet-167491" />
          <div className="post-job">
            <p className="post">{`Post `}</p>
            <p className="job">Job</p>
          </div>
        </div> */}
        
        <ButtonGrid/>

        <div className="specialprobutton" onClick={openGiveRecommendation}>
          <div className="pexels-thibault-trillet-1674911" />
          <div className="give-recommendation">
            <p className="post">Give</p>
            <p className="job">Recommendation</p>
          </div>
        </div>
        <div
          className="dailyeventbutton"
          onClick={onDailyEventButtonContainerClick}
        >
          <div className="pexels-thibault-trillet-1674912" />
          <div className="post-job">
            <p className="post">Search</p>
            <p className="job">Job</p>
          </div>
        </div>
        <FacilityClick />
      </div>
      {isCreatepostOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreatepost}
        >
          <Createpost onClose={closeCreatepost} />
        </PortalPopup>
      )}
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

export default HomePageAfterStudent;
