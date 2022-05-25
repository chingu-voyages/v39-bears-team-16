import React from 'react';
import styled from 'styled-components';
import { Outlet, Link, NavLink, useParams, matchPath } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const DynamicBreadcrumb = () => {
  const { id } = useParams();
  return <span>{id}</span>;
};

const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/admin', breadcrumb: null },
  { path: '/admin/cohorts/:id', breadcrumb: DynamicBreadcrumb },
];

const excludePaths = ['/', '/admin/cohorts/:id'];

const isRouteExcluded = (pathname: string) => {
  return excludePaths.find((path) => matchPath({ path }, pathname));
};

const navLinkStyles = {
  color: 'white',
};

const activeStyle = {
  fontWeight: 'bold',
  fontSize: '1.125em',
};

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }, idx) => {
        const excludedRoute = isRouteExcluded(match.pathname);

        return breadcrumb ? (
          <span key={match.pathname}>
            {excludedRoute ? (
              breadcrumb
            ) : (
              <NavLink
                end
                to={match.pathname}
                style={({ isActive }) => ({
                  ...navLinkStyles,
                  ...(isActive && activeStyle),
                })}
              >
                {breadcrumb}
              </NavLink>
            )}
            {idx === breadcrumbs.length - 1 ? null : '/'}
          </span>
        ) : null;
      })}
    </>
  );
};

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
