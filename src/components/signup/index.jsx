import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import StudentRole from '../studentrole'

const SignUp = () => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPasswod] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const [sectionId, setSectionId] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  const navigate = useNavigate()

  const validatePassword = (password, confirmPassword) => {
    setPasswordMatch(password === confirmPassword)
  }

  const signUp = (e) => {
    e.preventDefault()
    if (passwordMatch) {
      axios.post("https://quizattendace.onrender.com/api/user/add", {
        name,
        contact,
        password,
        role,
        sectionId
      }).then(res => {
        console.log(res)
        alert("Registered Sucessfully! You can login now.")
        navigate('/login')
      })
        .catch(error => {
          console.error('API request failed', error);
        });
    }
    else {
      alert('Check password & confirm password field')
    }
  }
  
  return (
    <Wrapper>
      <div className="inner">
        <div className='content_container'>
          <h1>Sign up</h1>
          <p>Kindly enter your details</p>
          <form onSubmit={signUp}>
            <input
              type='text'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='text'
              value={contact}
              placeholder='Contact'
              onChange={(e) => setContact(e.target.value)}
              pattern='[0-9]{10}'
              title='Please enter a valid 10 digit contact number'
              required
            />
            <input
              type='password'
              value={password}
              placeholder='Password'
              onChange={(e) => {
                setPasswod(e.target.value)
                validatePassword(e.target.value, confirmPassword)
              }}
              required />
            <input
              type='password' 
              value={confirmPassword} 
              placeholder='Confirm Password'
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                validatePassword(password, e.target.value)
              }}
              required 
            />
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value='' disabled>--Select Role--</option>
              <option value='student'>Student</option>
              <option value='faculty'>Faculty</option>
            </select>
            <div className='stu-container'>
              {role === 'student' && (<StudentRole sectionId={sectionId} setSectionId={setSectionId} />)}
            </div>
            <input 
              type='submit' 
              value='Sign up' 
            />
          </form>
        </div>
        <p className='bottom_text'>Already have an account? <Link className='link' to='/login'> Login</Link></p>
      </div>
    </Wrapper>
  )
}

export default SignUp
