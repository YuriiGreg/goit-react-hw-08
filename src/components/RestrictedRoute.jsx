import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRoute = ({ component: Component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default RestrictedRoute;


