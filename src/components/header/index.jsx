import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Header = () => {
  return (
    <Wrapper>
      <div className='header_top'>
        <h1>Attendance-App</h1>
      </div>
      <div className='navbar'>
        <Link className='link' to='/signupform'>SignUp</Link>
        <Link className='link' to='/loginform'>Login</Link>
      </div>
    </Wrapper>
  )
}

export default Header
