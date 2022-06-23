import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';

const StyledMemberLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.background.secondary};
`;

const Section = styled.section`
  margin-top: 64px;
`;

const MemberLayout = () => {
  return (
    <StyledMemberLayout>
      <Navbar />
      <Section>
        <Outlet />
      </Section>
    </StyledMemberLayout>
  );
};

export default MemberLayout;
