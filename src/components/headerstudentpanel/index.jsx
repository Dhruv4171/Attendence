import React, { useState } from 'react';
import Wrapper from './style';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
const HeaderStudentPanel = () => {
  const navigate = useNavigate('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const logout = () =>{
    window.localStorage.clear()
    navigate('/login')
    window.location.reload();
  }

  return (
    <Wrapper>
      <div className='header_left'>
        <h1>TruAttende</h1>
      </div>
      <div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
            <Link className='menu-item' to='/studpanel' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/updateprofile' onClick={toggleMenu}>
              Update Profile
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/profile' onClick={toggleMenu}>
              View Profile
            </Link>
          </li>
          <li>
            <Link className='logout' onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>
      <IconContext.Provider value={{ color: '#fff', size: '16px' }}>
        <div className='hamburger-icon' onClick={toggleMenu}>
          {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
        </div>
      </IconContext.Provider>
    </Wrapper>
  );
};

export default HeaderStudentPanel;