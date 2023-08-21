import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './style'

const Header = () => {
  return (
    <Wrapper>
          <div className='header_left'>
            <button>
              <img src='/img/togglebutton.png' alt='toggle_button'/>
            </button>
            <h1>Attendance-App</h1>
          </div>
          <div className='header_right'>
            <Link className='link' to='/register'>SignUp</Link>
            <Link className='link' to='/login'>Login</Link>
          </div>       
    </Wrapper>
  )
}

export default Header
