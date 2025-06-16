import { useCallback } from "react";
import HeaderBeforeLog from "../components/HeaderBeforeLog";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";

const LogInPage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/loginpage1");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/loginpage2");// Please sync "LogInPage2" to the project
  }, [navigate]);

  const onGroupContainerClick2 = useCallback(() => {
    // Please sync "LogInPage3" to the project
  }, []);

  return (
    <div className="loginpage">
      <div className="loginbackground1" />
      <div className="log-in-to1">Log in to start your session</div>
      <div className="faculty-of-science1">
        ©Faculty of Science, University of Peradeniya ,Peradeniya
      </div>
      <b className="log-in-your1">Log In Your Account</b>
      <b className="welcome1">Welcome</b>
      <div className="usernametopback1" />
      <div className="passwordtopback1" />
      <input
        className="usernamefield1"
        placeholder="Type Your  User Name Here"
        type="text"
      />
      <b className="dont-have-an1">Don’t have an account ?</b>
      <b className="registerbutton1">Register | Create an account</b>
      <div className="contactus1">If you have an issue contact us .</div>
      <img className="loginimage-icon1" alt="" src="/loginimage@2x.png" />
      <HeaderBeforeLog />
      <Footer footerTop="1636px" />
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <input
          className="passwordfield1"
          placeholder="Login as Student"
          type="text"
        />
      </div>
      <div className="rectangle-group" onClick={onGroupContainerClick1}>
        <div className="group-child" />
        <input
          className="passwordfield1"
          placeholder="Login as Employee"
          type="text"
        />
      </div>
      <div className="rectangle-container" onClick={onGroupContainerClick2}>
        <div className="group-child" />
        <input
          className="passwordfield1"
          placeholder="Login as Academic Staff"
          type="text"
        />
      </div>
    </div>
  );
};

export default LogInPage;
