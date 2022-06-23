import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/logout';
import MenuItem from '../MenuItem/MenuItem';
import { LogoutIcon } from '../Sidebar/Sidebar.styled';
import { StyledNavbar, StyledNavbarSection } from './Navbar.styled';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import { UserContext } from '../../App';

const Navbar = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in', { replace: true });
  };

  return (
    <StyledNavbar>
      <StyledNavbarSection>Logo</StyledNavbarSection>
      <StyledNavbarSection>
        <MenuItem to="/member/home">Home</MenuItem>
        <MenuItem to="/member/editor">Editor</MenuItem>
      </StyledNavbarSection>
      <StyledNavbarSection>
        <DropDownMenuItem
          header={
            <>
              <span>P</span>
              <span>{user.name}</span>
            </>
          }
          isOpen
        >
          <MenuItem to="/sign-in" onClick={() => handleLogout()}>
            <LogoutIcon />
            Logout
          </MenuItem>
        </DropDownMenuItem>
      </StyledNavbarSection>
    </StyledNavbar>
  );
};

export default Navbar;
