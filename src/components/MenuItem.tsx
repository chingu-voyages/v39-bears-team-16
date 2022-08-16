import React from 'react';
import styled, { useTheme } from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface MenuItemInterface extends NavLinkProps {
  menuItemTheme: 'underline' | 'highlight';
}

const highlightActiveStyle = (theme) => ({
  fontWeight: '600',
  backgroundColor: 'rgba(197, 225, 255, 0.5)',
  borderLeft: `6px solid ${theme.color.primary}`,
});

const underlineActiveStyle = (theme) => ({
  fontWeight: '600',
  borderBottom: `4px solid ${theme.color.primary}`,
});

const MenuItem = ({ style, menuItemTheme, ...props }: MenuItemInterface) => {
  const theme = useTheme();

  const activeStyle =
    menuItemTheme === 'highlight'
      ? highlightActiveStyle(theme)
      : underlineActiveStyle(theme);

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

export const HighlightMenuItem = styled(MenuItem)`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: 100%;
  padding: 0.75em;
  border-left: 6px solid transparent;

  &:hover {
    background-color: rgba(197, 225, 255, 0.3);
  }
`;

export const UnderlineMenuItem = styled(MenuItem)`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.black};
  padding: 0.9em;

  &:hover {
    background-color: rgba(197, 225, 255, 0.3);
    border-top-radius: 4px;
  }
`;
