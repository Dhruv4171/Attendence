import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <Link className='link' to='/dashboard'></Link>
      </div>
    </div>
  )
}

export default Header
