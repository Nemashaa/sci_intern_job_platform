import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUsPage.css";
import HeaderBeforeLog from "../components/HeaderBeforeLog";
import FooterNew from "../components/FooterNew";
import AboutUs from "../components/AboutUs";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const onLogOutContainerClick = useCallback(() => {
    // Please sync "HomePage" to the project
  }, []);

  const onLogLogo1ImageClick = useCallback(() => {
    navigate("/lectureprofile");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/homepage-afterstudent");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onRegistrationClick = useCallback(() => {
    // Please sync "Registration" to the project
  }, []);

  const onSearchInternshipClick = useCallback(() => {
    // Please sync "SearchJob" to the project
  }, []);

  return (
    <div className="aboutus">
      <div className="aboutus-child" />
      <HeaderBeforeLog/>
      <img className="icon1" alt="" src="/14@2x.png" />
      <div className="rectangle-parent1">
        <div className="rectangle-div" />
        <div className="historytpoic-parent">
        <b className="historytpoic" style={{ fontSize: '2.0em' }}>About Us</b>
          <div className="history">
            "Welcome to the University of Peradeniya Science Faculty's Job and
            Recommendation Portal! Our platform is designed to empower students
            by connecting them with job opportunities and providing meaningful
            support from lecturers. Students can explore job postings, apply for
            positions, and request recommendations from lecturers. These
            recommendations highlight the student’s skills and abilities,
            helping them stand out to potential employers. Employers can post
            job opportunities and discover talented individuals, creating a
            collaborative space for growth and success within our faculty."
          </div>
        </div>
      </div>
      <AboutUs/>
      <FooterNew/>
    </div>
  );
};

export default AboutUsPage;
