import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AdminNavbar from './AdminNavbar';

const Container = styled.div`
  max-width: 1200px;
  padding: 0 60px;
  display: flex;
`;

const AdminMainLayout = () => {
  return (
    <div>
      <Container>
        <AdminNavbar />
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminMainLayout;
