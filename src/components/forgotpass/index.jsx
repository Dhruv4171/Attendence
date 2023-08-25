import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "./style";


const ForgotPass = () => {
    const [contact, setContact] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate()
    
    useEffect( () => {
      axios.get('https://quizattendace.onrender.com/api/user/read')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {  
        console.log(error.message);
      });
    }, [])

    const changePass = () => { 
      // console.log(contact)
      users.forEach((user) => {
        if (user.contact == contact){
          axios.post('https://quizattendace.onrender.com/api/user/resetPassword',
          {
            contact,
            password
          })
          .then((res) => {
            alert("Password changed Successfully.")
            navigate('/')
            console.log(res.data)
          })
          .catch( (err) => {
            console.log(err.message)
          })
        }
      })

    }
    return (
        <Wrapper>
            <div className="main">
            <form>
              <input type="text" name="" id="" placeholder="Contact " value={contact} onChange={ (e) => setContact(e.target.value)}/>
              <input type="password" name="" id="" placeholder="Enter New Password" value ={password} onChange={ (e) => {setPassword(e.target.value)}}/>
              <input type="password" name="" id="" placeholder="Confirm Password" value ={confirmPassword} onChange={ (e) =>{setConfirmPassword(e.target.value)}}/>
              <input type="button" value="Proceed" onClick={changePass}/>
            </form>
            </div>
        </Wrapper>
    )
}

export default ForgotPass;