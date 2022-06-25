import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/logout';
import { DarkMenuItem, LightMenuItem } from '../MenuItem';
import { LogoutIcon } from '../Sidebar/Sidebar.styled';
import { StyledNavbar, StyledNavbarSection } from './Navbar.styled';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import { UserContext } from '../../App';
import logo from '../../assets/sail-logo/vector/default-monochrome.svg';

const Navbar = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/sign-in', { replace: true });
  };

  return (
    <StyledNavbar>
      <StyledNavbarSection>
        <img src={logo} alt="logo" />
      </StyledNavbarSection>
      <StyledNavbarSection>
        <DarkMenuItem to="/member/home" menuItemTheme="dark">
          Home
        </DarkMenuItem>
        <DarkMenuItem to="/member/editor" menuItemTheme="dark">
          Editor
        </DarkMenuItem>
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
          <LightMenuItem
            to="/sign-in"
            menuItemTheme="light"
            onClick={() => handleLogout()}
          >
            <LogoutIcon />
            Logout
          </LightMenuItem>
        </DropDownMenuItem>
      </StyledNavbarSection>
    </StyledNavbar>
  );
};

export default Navbar;
