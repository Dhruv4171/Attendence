import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wrapper from './style';
import axios from 'axios';

const Login = () => {
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState(''); // Corrected typo here
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios.get('https://server-api1-li2k.onrender.com/api/user/login')
      .then((res) => {
        console.log(res.dat);
        navigate('/profile');
      })
      .catch((error) => {  // Changed from .then to .catch for error handling
        console.log('API Request Failed', error);
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
          onChange={(e) => setPassword(e.target.value)} {/* Corrected the function name */}
        />
        <input
          type='button'
          value='Log in'
          onClick={login}
        />
        <p className='bottom_text'>Don't have an account?<Link className='link' to='/signupform'>Sign Up</Link></p>
      </div>
    </Wrapper>
  );
};

export default Login;
