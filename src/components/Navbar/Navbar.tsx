import React, { ReactNode } from 'react';
import { NavbarContainer, MenuItems } from './Navbar.styled';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <NavbarContainer>
      <MenuItems>{children}</MenuItems>
    </NavbarContainer>
  );
};

export default Navbar;
