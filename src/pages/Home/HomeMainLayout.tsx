import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HomeNavbar from './HomeNavbar';

const StyledContentLayout = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledHomeLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomeMainLayout = () => {
  return (
    <StyledHomeLayout>
      <HomeNavbar />
      <StyledContentLayout>
        <Outlet />
      </StyledContentLayout>
    </StyledHomeLayout>
  );
};

export default HomeMainLayout;
