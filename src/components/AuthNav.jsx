import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink 
      to="/register" 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Register
    </NavLink>
    <NavLink 
      to="/login" 
      className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;


