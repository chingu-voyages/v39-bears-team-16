import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </React.Fragment>
  );
};

const Crumb = styled.div`
  padding-left: 0.625rem;
  display: flex;
  flex-direction: row;
`;

const BreadcrumbArea = styled.div`
  background: ${({ theme }) => theme.background.primary};
  margin: 1.5em;
  height: 90px;
  border-radius: 1em;
  width: 90%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.background.white};
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

const BreadcrumbContainer = styled.span`
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
    <BreadcrumbArea>
      <CohortContainer>
        <CohortDash>Cohort 1: Dashboard</CohortDash>
        <CohortDash>
          <MenuIcon />
        </CohortDash>
      </CohortContainer>
      <BreadcrumbContainer>
        <Breadcrumbs />
      </BreadcrumbContainer>

      {/* <Outlet /> */}
    </BreadcrumbArea>
  );
};
