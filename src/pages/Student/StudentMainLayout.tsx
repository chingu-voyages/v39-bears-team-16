import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import StudentNavbar from './StudentNavbar';

const Container = styled.div`
  max-width: 1200px;
  padding: 0 60px;
  display: flex;
`;

const StudentMainLayout = () => {
  return (
    <div>
      <Container>
        <StudentNavbar />
        <Outlet />
      </Container>
    </div>
  );
};

export default StudentMainLayout;
