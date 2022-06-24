import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { HomeIcon, DashboardIcon, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuItem to="featured">
        <HomeIcon />
        Featured
      </MenuItem>
      <MenuItem to="enrolled">
        <DashboardIcon />
        Enrolled
      </MenuItem>
    </SidebarContainer>
  );
};
// Logout onClick should call logout() from utilities/auth.tsx

export default Sidebar;
