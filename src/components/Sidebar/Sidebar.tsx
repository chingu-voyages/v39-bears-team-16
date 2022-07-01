import React from 'react';
import { HighlightMenuItem } from '../MenuItem';
import { HomeIcon, DashboardIcon, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <HighlightMenuItem to="enrolled" menuItemTheme="highlight">
        <DashboardIcon />
        Enrolled
      </HighlightMenuItem>
      <HighlightMenuItem to="featured" menuItemTheme="highlight">
        <HomeIcon />
        Featured
      </HighlightMenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
