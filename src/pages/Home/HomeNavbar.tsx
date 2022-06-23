import React from 'react';
import styled from 'styled-components';
import MenuItem from '../../components/Navbar/MenuItem';
import Navbar from '../../components/Navbar/Navbar';
import { HomeIcon, DashboardIcon } from '../../components/Navbar/Navbar.styled';

const HomeNavbar = () => {
  return (
    <Navbar>
      <MenuItem to="/home/featured">
        <HomeIcon />
        Featured Plans
      </MenuItem>
      <MenuItem to="/home/enrolled">
        <DashboardIcon />
        Enrolled Plans
      </MenuItem>
    </Navbar>
  );
};

export default HomeNavbar;
