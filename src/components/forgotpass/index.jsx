import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Wrapper from "./style";


const ForgotPass = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://quizattendace.onrender.com/api/user/read')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  const validatePassword = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword)
  }

  const changePass = (e) => {
    e.preventDefault();
    const foundUser = users.find((user) => user.contact === contact);

    if (passwordMatch) {
      if (foundUser) {
        axios.post('https://quizattendace.onrender.com/api/user/resetPassword', {
          contact,
          password
        })
          .then((res) => {
            alert("Password changed successfully. You can login now.");
            navigate('/login')
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
            alert("Oops! Something went wrong while trying to reset your password. Please try again later.");
          });
      } else {
        alert("No user found. Please sign up!");
      }
    } else {
      alert("The password and confirm password fields don't match.");
    }
  };

  return (
    <Wrapper>
      <div className="inner">
        <h1>Forgot Password</h1>
        <form onSubmit={changePass} >
          <input 
            type="text" 
            placeholder="Contact " 
            value={contact} onChange={(e) => setContact(e.target.value)} 
            pattern="[0-9]{10}" 
            title="Please enter a valid 10 digit contact number" 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter New Password" 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              validatePassword(e.target.value, confirmPassword)}} 
            required 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              validatePassword(password, e.target.value)}} 
            required 
          />
          <input 
            type="submit" 
            value="Reset Password" 
          />
        </form>
      </div>
    </Wrapper>
  )
}

export default ForgotPass;