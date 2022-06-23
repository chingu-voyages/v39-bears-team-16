import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/logout';
import MenuItem from '../Sidebar/MenuItem';
import { LogoutIcon } from '../Sidebar/Sidebar.styled';
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in', { replace: true });
  };

  return (
    <StyledNavbar>
      <div>Logo</div>
      <MenuItem to="/member/home">Home</MenuItem>
      <MenuItem to="/member/editor">Editor</MenuItem>
      <MenuItem to="/sign-in" onClick={() => handleLogout()}>
        <LogoutIcon />
        Logout
      </MenuItem>
    </StyledNavbar>
  );
};

export default Navbar;
