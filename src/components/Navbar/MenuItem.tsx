import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

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

export default StyledMenuItem;
