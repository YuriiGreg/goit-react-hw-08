import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink 
      to="/register" 
      activeClassName="active"
      className="nav-link"
    >
      Register
    </NavLink>
    <NavLink 
      to="/login" 
      activeClassName="active"
      className="nav-link"
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;

