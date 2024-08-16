import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ element }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return !isLoggedIn ? element : <Navigate to="/contacts" />;
};

export default RestrictedRoute;
