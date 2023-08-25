import React, { useState } from 'react';
import Wrapper from './style';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
const HeaderFacultyPanel = () => {
  const navigate = useNavigate('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () =>{
    window.localStorage.clear();
    navigate('/')
  }
  return (
    <Wrapper>
      <div className='header_left'>
        <h1>Attendance-App</h1>
      </div>
      <div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
            <Link className='menu-item' to='/facpanel' onClick={toggleMenu}>
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
            <button className='logout' onClick={logout}>Logout</button>
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

export default HeaderFacultyPanel;