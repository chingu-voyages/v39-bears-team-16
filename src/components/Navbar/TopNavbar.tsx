import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/logout';
import MenuItem from './MenuItem';
import { NavbarContainer, LogoutIcon } from './Navbar.styled';

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in', { replace: true });
  };

  return (
    <NavbarContainer>
      <MenuItem to="/member/home">Home</MenuItem>
      <MenuItem to="/member/editor">Editor</MenuItem>
      <MenuItem to="/sign-in" onClick={() => handleLogout()}>
        <LogoutIcon />
        Logout
      </MenuItem>
    </NavbarContainer>
  );
};

export default TopNavbar;
