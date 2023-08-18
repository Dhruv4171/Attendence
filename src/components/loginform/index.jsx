import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const LoginForm = () => {
    const [email,setEmail] = useState('')
    const [password,setPasswod] = useState('')
    const dispatch = useDispatch()
    const login = (e) =>{
        e.preventDefault()
        dispatch({
            type : "LOG_IN",
            payload : {email,password}
        })
    }
  return (
    <Wrapper>
      <h1>Login</h1>
      <p>Welcome back!</p>
      <form className='form' action=''>
        <input 
          type='text'
          value={email}
          placeholder='Email'
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e)=>setPasswod(e.target.value)}
        />
        <input
          type='button'
          value='Log in'
          onClick={login}
        /> 
      </form>
      <p className='bottom_text'>Don't have an account?<Link className='link' to='/signupform'>Sign Up</Link></p>
    </Wrapper>
  )
}

export default LoginForm
