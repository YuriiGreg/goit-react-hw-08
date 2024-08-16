import React from 'react';

const UserMenu = ({ onLogout }) => (
  <div>
    <span>Welcome, User!</span>
    <button onClick={onLogout}>Logout</button>
  </div>
);

export default UserMenu;
