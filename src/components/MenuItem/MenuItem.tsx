import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

const activeStyle = {
  color: 'white',
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
  position: relative;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;

export default StyledMenuItem;
