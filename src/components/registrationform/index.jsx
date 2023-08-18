import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const RegistrationForm = () => {
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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = new Date().getTime()
    const register=(e)=>{
      e.preventDefault()
      dispatch({
        type : 'REGISTER_USER',
        payload : {id,name,gender,dob,address,city,state,country,contact,email,img}
      })
      navigate('/dashboard')
    }
  return (
    <Wrapper>
      <h1>Regitration</h1>
      <p>Kindly enter your details</p>
      <form action=''>
        <input 
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e)=>setName(e.target.value)}
        />
        <select required value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option disabled selected>--SelectGender--</option>
            <option value='Female'>FEMALE</option>
            <option value='Male'>Male</option>
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
      </form>
    </Wrapper>
  )
}

export default RegistrationForm
