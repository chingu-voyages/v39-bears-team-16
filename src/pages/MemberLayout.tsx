import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import TopNavbar from '../components/Navbar/TopNavbar';

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.background.secondary};
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const MemberLayout = () => {
  return (
    <Container>
      <Section>
        <TopNavbar />
        <Outlet />
      </Section>
    </Container>
  );
};

export default MemberLayout;
