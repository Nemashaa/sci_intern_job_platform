import { useState, useCallback } from "react";
import RequestRecommendation from "./RequestRecommendation";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./FacilityClick.css";

const FacilityClick = ({ className = "" }) => {
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
      <div
        className={`musiceventbutton ${className}`}
        onClick={openRequestRecommendation}
      >
        <div className="pexels-thibault-trillet-1674913" />
        <div className="request-recommendation2">
          <p className="request1">{`Request `}</p>
          <p className="recommendation6">Recommendation</p>
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

FacilityClick.propTypes = {
  className: PropTypes.string,
};

export default FacilityClick;
