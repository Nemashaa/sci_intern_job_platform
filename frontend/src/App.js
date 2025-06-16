import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageAfterStudent from "./pages/HomePageAfterStudent";
import LogInPage1 from "./pages/LogInPage1";
import LogInPage from "./pages/LogInPage";
import StudentProfile from "./pages/StudentProfile";
import LectureProfile from "./pages/LectureProfile";
import { AuthProvider } from './config/AuthContext';
import RegisterStudent from "./pages/RegisterStudent";
import RegistrationEmployer from "./pages/RegistrationEmployer";
import RegisterLecturer from "./pages/RegisterLecturer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import StudentHome from "./pages/StudentHome";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsNew from "./pages/AboutUsNew";
import ContactUs from "./pages/ContactUs";
import SearchPost from "./pages/SearchPost";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage1":
        title = "";
        metaDescription = "";
        break;
      case "/HomePageAfterStudent":
        title = "";
        metaDescription = "";
        break;
      case "/Studentprofile":
        title = "";
        metaDescription = "";
        break;
      case "/Lectureprofile":
        title = "";
        metaDescription = "";
        break;
      case "/AboutUs":
        title = "";
        metaDescription = "";
        break;
      case "/Registration":
        title = "";
        metaDescription = "";
        break;


    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/loginpage1" element={<LogInPage1 />} />
        <Route path="/HomePageAfterStudent" element={<HomePageAfterStudent />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/Lectureprofile" element={<LectureProfile />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/register-employer" element={<RegistrationEmployer />} />
        <Route path="/register-lecturer" element={<RegisterLecturer />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/aboutn" element={<AboutUsNew />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/jobs" element={<SearchPost />} />

      </Routes>
    </AuthProvider>
  );
}
export default App;
