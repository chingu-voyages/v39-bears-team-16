import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  userRole: string;
}

const Container = styled.div`
  max-width: 1200px;
  padding: 0 60px;
  display: flex;
`;

const MainLayout = ({ userRole }: MainLayoutProps) => {
  return (
    <div>
      <Container>
        <Navbar userRole={userRole} />
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
