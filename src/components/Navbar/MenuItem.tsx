import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

const activeStyle = {
  color: 'white',
  fontWeight: '600',
  width: '12em',
  height: '3em',
  borderRadius: '1em',
  background:
    'linear-gradient(124deg, rgba(32,201,151,1) 10%, rgba(35,194,154,1) 35%, rgba(68,107,197,1) 75%, rgba(102,16,242,1) 90%)',
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
