import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IconMenuItem from 'components/IconMenuItem/IconMenuItem';
import { logout } from '../../api/logout';
import { UnderlineMenuItem } from '../MenuItem';
import {
  MenuItemWrapper,
  StyledNavbar,
  StyledNavbarSection,
  LogoutIcon,
  SearchIcon,
} from './Navbar.styled';
import { UserContext } from '../../App';
import logo from '../../assets/sail-logo/vector/default-monochrome-primary.svg';
import { StyledDropdownItem } from '../DropDownMenuItem/DropDownMenuItem.styled';

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
        <SearchIcon />
        <IconMenuItem header={<span>{user.name.charAt(0).toUpperCase()}</span>}>
          <StyledDropdownItem onClick={() => handleLogout()}>
            <LogoutIcon />
            Logout
          </StyledDropdownItem>
        </IconMenuItem>
      </StyledNavbarSection>
    </StyledNavbar>
  );
};

export default Navbar;
