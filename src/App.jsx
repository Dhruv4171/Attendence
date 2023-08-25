import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderStudentPanel from "./components/headerstudentpanel";
import SignUp from "./components/signup";
import Login from "./components/login";
import Profile from "./components/profile";
import UpdateProfile from "./components/updateprofile";
import './app.css'
import StudPanel from "./components/studpanel";
import Facpanel from "./components/facpanel";
import PageError from "./components/pageError";
import HeaderFacultyPanel from "./components/headerfacultypanel";
import Header from "./components/header";
import Footer from "./components/footer";
import MarkAttd from "./components/markattd";
import ForgotPass from "./components/forgotpass";
import { useEffect, useState } from "react";
import Subject from "./components/subject";
import Loader from "./components/loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("registered") === "true"
  );
  const handleLogin = () => {
    setIsLoggedIn(true);
    window.location.reload();
  };
  useEffect(() => {
    if (!isLoggedIn) {
      window.localStorage.clear();
    }
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      {isLoading ? <Loader /> : (
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/updateprofile" element={<UpdateProfile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/studpanel" element={<><HeaderStudentPanel /><StudPanel /></>} />
              <Route path="/facpanel" element={<><HeaderFacultyPanel /><Facpanel /></>} />
              <Route path="/subject" element={<><HeaderFacultyPanel /><Subject /></>} />
              <Route path="/markattd" element={<MarkAttd />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/*" element={<PageError />} />
            </>
          ) : (
            <>
              <Route path="/" element={<><Header /><SignUp /></>} />
              <Route path="/login" element={<><Header /><Login onLogin={handleLogin} /></>} />
              <Route path="/forgotpass" element={<ForgotPass />} />
              <Route path="/*" element={<PageError />} />
            </>
          )}
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
