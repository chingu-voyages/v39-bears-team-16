import React from 'react';
import styled, { useTheme } from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface MenuItemInterface extends NavLinkProps {
  menuItemTheme: 'light' | 'dark';
}

const lightActiveStyle = (theme) => ({
  fontWeight: '700',
  backgroundColor: 'rgba(200,200,200,0.5)',
  borderLeft: `6px solid ${theme.color.primary}`,
});

const darkActiveStyle = (theme) => ({
  fontWeight: '700',
  borderBottom: `2px solid ${theme.color.yellow}`,
});

const MenuItem = ({ style, menuItemTheme, ...props }: MenuItemInterface) => {
  const theme = useTheme();

  const activeStyle =
    menuItemTheme === 'light'
      ? lightActiveStyle(theme)
      : darkActiveStyle(theme);

  return (
    <NavLink
      {...props}
      style={({ isActive }) => ({
        ...style,
        ...(isActive && activeStyle),
      })}
    />
  );
};

export const LightMenuItem = styled(MenuItem)`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  padding: 0.75em;

  &:hover {
    font-weight: 700;
  }
`;

export const DarkMenuItem = styled(MenuItem)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.white};
  padding-bottom: 0.2em;

  &:hover {
    font-weight: 700;
  }
`;
