import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

const activeStyle = {
  color: 'white',
  fontWeight: '600',
  width: '12em',
  height: '3em',
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
  display: flex;
  align-items: center;
`;

export default StyledMenuItem;
