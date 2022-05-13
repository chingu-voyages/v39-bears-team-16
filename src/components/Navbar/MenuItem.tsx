import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

const activeStyle = {
  color: 'white',
  fontWeight: '600',
  width: '170px',
  height: '3em',
  borderRadius: '15px',
  background: '#A8A8A85B',
  boxShadow: '0px 0px 3px 3px #A8A8A8',
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
