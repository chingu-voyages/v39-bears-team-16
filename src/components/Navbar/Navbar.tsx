import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../api/logout';
import { UnderlineMenuItem, HighlightMenuItem } from '../MenuItem';
import { LogoutIcon } from '../Sidebar/Sidebar.styled';
import {
  MenuItemWrapper,
  StyledNavbar,
  StyledNavbarSection,
} from './Navbar.styled';
import DropDownMenuItem from '../DropDownMenuItem/DropDownMenuItem';
import { UserContext } from '../../App';
import logo from '../../assets/sail-logo/vector/default-monochrome-primary.svg';

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
        <Link to="/member/home">
          <img src={logo} alt="logo" />
        </Link>
      </StyledNavbarSection>
      <StyledNavbarSection>
        <MenuItemWrapper>
          <UnderlineMenuItem to="/member/home" menuItemTheme="underline">
            Home
          </UnderlineMenuItem>
        </MenuItemWrapper>
        <MenuItemWrapper>
          <UnderlineMenuItem to="/member/editor" menuItemTheme="underline">
            Editor
          </UnderlineMenuItem>
        </MenuItemWrapper>
      </StyledNavbarSection>
      <StyledNavbarSection>
        <DropDownMenuItem
          header={
            <>
              <span>P</span>
              <span>{user.name}</span>
            </>
          }
        >
          <HighlightMenuItem
            to="/sign-in"
            menuItemTheme="highlight"
            onClick={() => handleLogout()}
          >
            <LogoutIcon />
            Logout
          </HighlightMenuItem>
        </DropDownMenuItem>
      </StyledNavbarSection>
    </StyledNavbar>
  );
};

export default Navbar;
