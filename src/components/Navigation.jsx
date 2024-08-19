import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink 
          to="/contacts" 
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;


