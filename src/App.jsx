import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import RegistrationForm from "./components/registrationform";
import Header from "./components/header";
import SignUpForm from "./components/signupform";
import { useSelector } from "react-redux";
import Login from "./components/login";
import Registration from "./components/registration";
import './app.css'


function App() {
  const loggedInUser = useSelector(state=>state.loggedInUser)
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<SignUpForm/>}/>
      <Route path="/login" element={loggedInUser?<Dashboard/>:<Login/>}/>
      <Route path="/register" element={<Registration />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
