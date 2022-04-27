import React, { ReactNode } from 'react';
import { NavbarContainer, MenuItems } from './Navbar.styled.js';
// import { logout } from '../utilities/auth';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/sign-in', { replace: true });
  // };

  return (
    <NavbarContainer>
      <MenuItems>{children}</MenuItems>
    </NavbarContainer>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default Navbar;
