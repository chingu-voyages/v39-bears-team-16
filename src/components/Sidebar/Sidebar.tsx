import React from 'react';
import { HighlightMenuItem } from '../MenuItem';
import { FeaturedIcon, EnrolledIcon, SidebarContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <HighlightMenuItem to="enrolled" menuItemTheme="highlight">
        <EnrolledIcon />
        Enrolled
      </HighlightMenuItem>
      <HighlightMenuItem to="featured" menuItemTheme="highlight">
        <FeaturedIcon />
        Featured
      </HighlightMenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
