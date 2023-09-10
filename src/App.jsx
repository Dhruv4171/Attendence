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
import AttdList from "./components/attdlist";
import Protected from "./components/protected";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('REGISTERED') === 'true'
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    if (!isLoggedIn) {
      window.localStorage.clear();
    }
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      {isLoading ? <Loader /> : (
        <Routes>
          <Route path="/" element={<><Header /><SignUp /></>} />
          <Route path="/login" element={<><Header /><Login /></>} />
          <Route path="/resetpassword" element={<><Header /><ForgotPass /> </>} />
          <Route path="/loader" element={<Loader />} />
          <Route
            path="/studpanel"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <HeaderStudentPanel /><StudPanel />
              </Protected>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <UpdateProfile />
              </Protected>
            }
          />
          <Route path="/profile" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>} />
          <Route path="/facpanel" element={<Protected isLoggedIn={isLoggedIn}><HeaderFacultyPanel /><Facpanel /></Protected>} />
          <Route path="/subject" element={<Protected isLoggedIn={isLoggedIn}><HeaderFacultyPanel /><Subject /></Protected >} />
          <Route path="/markattd" element={<Protected isLoggedIn={isLoggedIn}><MarkAttd /></Protected>} />
          <Route path="/attdlist" element={<Protected isLoggedIn={isLoggedIn}><HeaderStudentPanel /><AttdList /></Protected>} />
          <Route path="/*" element={<PageError />} />
        </Routes>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
