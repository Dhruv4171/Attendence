import React, { useState } from 'react';
import Wrapper from './style';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { IconContext } from 'react-icons';
const HeaderStudentPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <div className='header_left'>
        <h1>Attendance-App</h1>
      </div>
      <div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link className='menu-item' to='/updateprofile' onClick={toggleMenu}>
              Update Profile
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/studpanel' onClick={toggleMenu}>
              Student Panel
            </Link>
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