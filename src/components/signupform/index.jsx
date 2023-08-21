import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const [name,setName] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPasswod] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [role,setRole] = useState('')
    const [passwordMatch,setPasswordMatch] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validatePassword = (password,confirmPassword)=>{
      setPasswordMatch(password === confirmPassword)
    }
    const signUp = (e) =>{
        e.preventDefault()
        if(passwordMatch){
          dispatch({
            type : 'SIGN_UP',
            payload : {name,contact,role,password}
          })
          navigate('/registrationform')
        }
        else{
          alert('Check password & confirm password field')
        }
    } 
  return (
    <Wrapper>  
      <h1>Sign up</h1>
      <p>Kindly enter your details</p>
      <form action=''>
        <input 
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e)=>setName(e.target.value)}
        />
        <input 
          type='text'
          value={contact}
          placeholder='Contact'
          onChange={(e)=>setContact(e.target.value)}
        />
        <input 
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e)=>{setPasswod(e.target.value)
                      validatePassword(e.target.value,confirmPassword)}}
        />
        <input 
          type='password'
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e)=>{setConfirmPassword(e.target.value)
                          validatePassword(password,e.target.value)}}
        />
        <select required value={role} onChange={(e)=>setRole(e.target.value)}>
            <option  value={null} disabled selected>--SelectRole--</option>
            <option value='Student'>STUDENT</option>
            <option value='Faculty'>FACULTY</option>
        </select>
        <input
          type='button'
          value='Sign up'
          onClick={signUp}
        /> 
      </form>
      <p className='bottom_text'>Already have an account?<Link className='link' to='/loginform'>Login</Link></p>
    </Wrapper>
  )
}

export default SignUpForm
