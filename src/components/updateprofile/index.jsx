import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Wrapper from './style'
import axios from 'axios'

const UpdateProfile = () => {
    const [name,setName] = useState('')
    const [gender,setGender]=useState('')
    const [dob,setDOB] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [country,setCountry] = useState('')
    const [contact,setContact] = useState('')
    const [email,setEmail] = useState('')
    const [img,setImgUrl] = useState('')
    
    const navigate = useNavigate()
    // const id = new Date().getTime()
    const register=(e)=>{
      e.preventDefault()
      axios.put('https://quizattendace.onrender.com/api/user/update',{
       contact,
       name,
       gender,
       dob,
       address,
       city,
       state,
       country,
       email,
       img
      })
      .then( (res) => {
        console.log(res.data)
      })
      .catch( (err) => {
        console.log(err)
      })
      navigate('/profile')
    }
  return (
    <Wrapper>
      <div className="inner">
      <h1>Update Your Profile</h1>
        <input 
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e)=>setName(e.target.value)}
        />
        <select required value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value='' selected disabled> --SelectGender-- </option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select>
        <input 
          type='date'
          value={dob}
          onChange={(e)=>setDOB(e.target.value)}
        />
        <input
          type='text'
          value={address}
          placeholder='Address'
          onChange={(e)=>setAddress(e.target.value)}
        />
        <input
          type='text'
          value={city}
          placeholder='City'
          onChange={(e)=>setCity(e.target.value)}
        />
        <input
          type='text'
          value={state}
          placeholder='State'
          onChange={(e)=>setState(e.target.value)}
        />
        <input
          type='text'
          value={country}
          placeholder='Country'
          onChange={(e)=>setCountry(e.target.value)}
        />
        <input
          type='text'
          value={contact}
          placeholder='Contact'
          onChange={(e)=>setContact(e.target.value)}
        />
        <input
          type='text'
          value={email}
          placeholder='Email'
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type='file'
          placeholder='Upload Profile Picture'
          onChange={(e)=>setImgUrl(URL.createObjectURL(e.target.files[0]))}
        />
        <input
          type='button'
          value='Register'
          onClick={register}
        /> 
      </div>
    </Wrapper>
  )
}

export default UpdateProfile
