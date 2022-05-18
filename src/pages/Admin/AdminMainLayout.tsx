import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AdminNavbar from './AdminNavbar';
import { BreadcrumbMenu } from '../../components/BreadcrumbMenu/BreadcrumbMenu';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background.secondary};
`;

const AdminMainLayout = () => {
  return (
    <div>
      <Container>
        <AdminNavbar />
        <BreadcrumbMenu />
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminMainLayout;
