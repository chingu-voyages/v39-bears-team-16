import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
// import { logout } from '../utilities/auth';

interface NavbarProps {
  userRole: string;
}

// should be styled and updated later
const NavbarContainer = styled.div`
  background-color: black;
  color: white;
  border: 2px solid green;
  padding: 2.5em;
`;

const MenuItems = styled.section`
  display: flex;
  flex-direction: column;
`;

const activeStyle = {
  color: 'red',
  fontWeight: '600',
};

const MenuItem = ({ style, ...props }: NavLinkProps) => (
  <NavLink
    {...props}
    style={({ isActive }) => ({
      ...style,
      ...(isActive && activeStyle),
    })}
  />
);

const StyledMenuItem = styled(MenuItem)`
  text-decoration: none;
  color: white;
  margin-right: 2.5em;
`;

const Navbar = ({ userRole }: NavbarProps) => {
  const classItemText = userRole === 'admin' ? 'Update Class' : 'Class Tracker';
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/sign-in', { replace: true });
  // };

  return (
    <NavbarContainer>
      <MenuItems>
        <StyledMenuItem to={`/${userRole}/home`}>Dashboard</StyledMenuItem>
        <StyledMenuItem to={`/${userRole}/class`}>
          {classItemText}
        </StyledMenuItem>
        <div>Logout</div>
      </MenuItems>
    </NavbarContainer>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default Navbar;
