import React from 'react';
import styled from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';

const BreadcrumbContainer = styled.div`
  background: ${({ theme }) => theme.background.primary};
  margin: 1.5em;
  height: 90px;
  border-radius: 1em;
  width: 60%;
`;

const CohortContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CohortDash = styled.section`
  color: ${({ theme }) => theme.background.white};
  margin: 1em;
  font-size: 0.85em;
  font-weight: 600;
`;

const Backlinks = styled.span`
  padding-left: 1.5em;
  font-size: 0.75em;
  color: ${({ theme }) => theme.background.white};
`;

const iconStyles = {
  fontSize: '1.5rem',
  margin: '.175em',
  color: 'white',
};

export const MenuIcon = styled(HiMenuAlt3)`
  ${iconStyles}
`;

export const BreadcrumbMenu = () => {
  return (
    <BreadcrumbContainer>
      <CohortContainer>
        <CohortDash>Cohort 1: Dashboard</CohortDash>
        <CohortDash>
          <MenuIcon />
        </CohortDash>
      </CohortContainer>
      <Backlinks>Home / Dashboard</Backlinks>
    </BreadcrumbContainer>
  );
};
