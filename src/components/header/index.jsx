import React, { useState } from 'react';
import Wrapper from './style';
import Menu from '../menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
const Header = () => {
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
        <div className='hamburger-icon' onClick={toggleMenu}>
          {isMenuOpen?<ImCross/>:<GiHamburgerMenu/>}
        </div>
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </Wrapper>
  );
};

export default Header;