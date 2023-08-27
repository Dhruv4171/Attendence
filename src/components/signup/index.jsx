import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import StudentRole from '../studentrole'
const SignUp = () => {
    const [name,setName] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPasswod] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [role,setRole] = useState('')
    const [sectionId, setSectionId] = useState('')
    const [passwordMatch,setPasswordMatch] = useState(true)

    const navigate = useNavigate()

    const validatePassword = (password,confirmPassword)=>{
      setPasswordMatch(password === confirmPassword)
    }
    
    const signUp = (e) =>{
      e.preventDefault()
        if(passwordMatch){
          axios.post("https://quizattendace.onrender.com/api/user/add",{
            name,
            contact,
            password,
            role,
            sectionId
          }).then(res=>{
              console.log(res)
              alert("Registered Sucessfully! You can login now.")
              navigate('/login')
          })
          .catch(error =>{
              console.error('API request failed',error);
          });
        }
        else{
          alert('Check password & confirm password field')
        }
    } 
  return (
    <Wrapper>  
      <div className="inner">
        <div className='content_container'>
        <h1>Sign up</h1>
        <p>Kindly enter your details</p>
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
            <option value='' selected disabled>--SelectRole--</option>
            <option value='student'>STUDENT</option>
            <option value='faculty'>FACULTY</option>
        </select>
        <div className='stu-container'>
            {role === 'student' && (
              <StudentRole sectionId={sectionId} setSectionId={setSectionId}/>
            )}
        </div>
        </div>
        <input
          type='button'
          value='Sign up'
          onClick={signUp}
        /> 
      <p className='bottom_text'><Link className='link' to='/login'>Already have an account?Login</Link></p>
      </div>
    </Wrapper>
  )
}

export default SignUp
