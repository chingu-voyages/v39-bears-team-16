import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/Navbar/Navbar';
import { getCsrfToken } from 'api/getCsrfToken';

const StyledMemberLayout = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.white};
`;

const Section = styled.section`
  margin-top: 64px;
`;

export const PlansPageContainer = styled.div`
  padding: 2em 9em;
  max-width: 1500px;
  margin: auto;
`;

export const StyledPlanCardsContainer = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em;
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
