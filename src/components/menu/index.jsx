import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './style';

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <Wrapper>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <Link className='menu-item' to='/updateprofile'>
                    Update Profile
                </Link>
                <Link className='menu-item' to='/signup'>
                    Sign Up
                </Link>
                <Link className='menu-item' to='/login'>
                    Login
                </Link>
                <Link className='menu-item' to='/facpanel'>
                    Faculty Panel
                </Link>
                <Link className='menu-item' to='/studpanel'>
                    Student Panel
                </Link>
            </div>
        </Wrapper>
    );
};

export default Menu;
