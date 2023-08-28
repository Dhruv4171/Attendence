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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   window.location.reload(); 
  // };
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
    {isLoading?<Loader />:(
    <Routes>
            <Route
          path="/studpanel"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <StudPanel />
            </Protected>
          }
        />
            <Route path="/" element={<><Header /><SignUp /></>} />
            <Route path="/login" element={<><Header /><Login /></>} />
            <Route path="/resetpassword" element={<><Header/><ForgotPass/> </>} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/facpanel" element={<><HeaderFacultyPanel /><Facpanel /></>} />
            <Route path="/subject" element={<><HeaderFacultyPanel /><Subject /></>} />
            <Route path="/markattd" element={<MarkAttd />} />
            <Route path="/loader" element={<Loader/>}/>
            <Route path="/attdlist" element={<><HeaderStudentPanel /><AttdList /></>} />
            <Route path="/*" element={<PageError />} />   
    </Routes>
    )}
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
