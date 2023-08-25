import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from './style';
import axios from 'axios';

const Login = () => {
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios.post('https://quizattendace.onrender.com/api/user/login',{
      contact,
      password
    })
    .then((res) => {
        console.log(res.data);
        localStorage.setItem("registered", true)
        localStorage.setItem("userinfo", JSON.stringify(res.data))
        
        if(res.data.user.role === 'student'){
          navigate('/studpanel')
        }else
        navigate('/facpanel')
      })
      .catch((error) => {  
        console.log('API Request Failed', error);
        alert('Invalid Contact or Password')
      });
  };

  return (
    <Wrapper>
      <div className="inner">
        <h1>Login</h1>
        <p>Welcome back!</p>
        <input
          type='text'
          value={contact}
          placeholder='Contact'
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className='forgot_text' to='/forgotpass' >Forgot Password?</Link>
        <input
          type='button'
          value='Log in'
          onClick={login}
        />
        <p className='bottom_text'>Don't have an account?<Link className='link' to='/'>Sign Up</Link></p>
      </div>
    </Wrapper>
  );
};

export default Login;
