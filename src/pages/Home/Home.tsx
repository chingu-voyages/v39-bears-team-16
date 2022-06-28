import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { StyledHome, StyledMainSection } from './Home.styled';

const Home = () => {
  return (
    <StyledHome>
      <Sidebar />
      <StyledMainSection>
        <Outlet />
      </StyledMainSection>
    </StyledHome>
  );
};

export default Home;
