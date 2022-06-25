import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { StyledHome, StyledMainSection } from './Home.styled';

// const Line = styled.div`
//   width: 100%;
//   height: 1.5px;
//   background: ${({ theme }) => theme.color.white};
//   opacity: 30%;
//   border-radius: 1em;
// `;

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
