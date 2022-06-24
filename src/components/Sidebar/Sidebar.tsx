import React from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import { HomeIcon, DashboardIcon, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  const { id } = useParams();

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
