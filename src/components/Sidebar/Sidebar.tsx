import React from 'react';
import { LightMenuItem } from '../MenuItem';
import { HomeIcon, DashboardIcon, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LightMenuItem to="featured" menuItemTheme="light">
        <HomeIcon />
        Featured
      </LightMenuItem>
      <LightMenuItem to="enrolled" menuItemTheme="light">
        <DashboardIcon />
        Enrolled
      </LightMenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
