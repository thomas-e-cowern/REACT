import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to='/' activeClassName='is-active' exact={ true }>Go to Home Page  </NavLink>
        <NavLink to='/portfolioPage' activeClassName='is-active' exact={ true }>Go to the Portfolio Page  </NavLink>
        <NavLink to='/contact' activeClassName='is-active'>Go to Contact Page  </NavLink>
    </header>
);

export default Header;