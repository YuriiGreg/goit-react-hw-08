import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { logout } from '../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Welcome, {user.name}!</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
