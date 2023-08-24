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



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header/><SignUp/></>}/>
      <Route path="/login" element={<><Header/><Login/></>} />
      <Route path="/updateprofile" element={<UpdateProfile/>}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path='/studpanel' element={<><HeaderStudentPanel/><StudPanel /></>}/>
      <Route path='/facpanel' element={<><HeaderFacultyPanel/><Facpanel/></>}/>
      <Route path = '/*' element = {<PageError />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
