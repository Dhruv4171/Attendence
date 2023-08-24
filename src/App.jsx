import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SignUp from "./components/signup";
import { useSelector } from "react-redux";
import Login from "./components/login";
import Profile from "./components/profile";
import UpdateProfile from "./components/updateprofile";
import './app.css'
import StudPanel from "./components/studpanel";
import Facpanel from "./components/facpanel";
import PageError from "./components/pageError";



function App() {
  const loggedInUser = useSelector(state=>state.loggedInUser)
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={loggedInUser ? <Profile /> : <Login />} />
      <Route path="/updateprofile" element={<UpdateProfile/>}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path='/studpanel' element={<StudPanel />}/>
      <Route path='/facpanel' element={<Facpanel />}/>
      <Route path = '/*' element = {<PageError />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
