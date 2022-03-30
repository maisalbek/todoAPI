import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <nav className='nav-list'>
                <NavLink to='/counter'>COUNTER</NavLink>
                <NavLink to='/cook'>COOK</NavLink>
                <NavLink to='/form'>FORM</NavLink>
                <NavLink to='/'>TODO</NavLink>
            </nav>
        </div>
    );
};

export default Header;