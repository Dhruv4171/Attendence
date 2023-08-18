import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import RegistrationForm from "./components/registrationform";
import Header from "./components/header";
import SignUpForm from "./components/signupform";
import { useSelector } from "react-redux";
import LoginForm from "./components/loginform";


function App() {
  const loggedInUser = useSelector(state=>state.loggedInUser)
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<SignUpForm/>}/>
      <Route path="/loginform" element={loggedInUser?<Dashboard/>:<LoginForm/>}/>
      <Route path="/signupform" element={<SignUpForm/>}/>
      <Route path="/registrationform" element={<RegistrationForm />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
