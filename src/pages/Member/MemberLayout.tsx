import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/Navbar/Navbar';
import { getCsrfToken } from 'api/getCsrfToken';

const StyledMemberLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.color.secondary};
`;

const Section = styled.section`
  margin-top: 64px;
  overflow: auto;
`;

const MemberLayout = () => {
  useEffect(() => {
    getCsrfToken();
  }, []);

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
