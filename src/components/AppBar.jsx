import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/operations';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu onLogout={handleLogout} /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
