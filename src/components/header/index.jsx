import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Header = () => {
  return (
    <Wrapper>
          <div className='header_left'>
            <h1>Attendance-App</h1>
          </div>
          <div className='header_right'>
            <Link className='link' to='/login'>Login</Link>
          </div>       
    </Wrapper>
  )
}

export default Header
