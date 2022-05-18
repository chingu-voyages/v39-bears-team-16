import React from 'react';
<<<<<<< HEAD
import { NavLink, useParams, matchPath } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
  navLinkStyles,
  activeStyle,
  BreadcrumbArea,
  CohortContainer,
  CohortDash,
  BreadcrumbContainer,
  MenuIcon,
} from './BreadcrumbMenu.styled';

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

export const BreadcrumbMenu = () => {
  return (
    <BreadcrumbArea>
=======
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
>>>>>>> d6b1cfb (styling attempt one for breadcrumb menu)
      <CohortContainer>
        <CohortDash>Cohort 1: Dashboard</CohortDash>
        <CohortDash>
          <MenuIcon />
        </CohortDash>
      </CohortContainer>
<<<<<<< HEAD
      <BreadcrumbContainer>
        <Breadcrumbs />
      </BreadcrumbContainer>

      {/* <Outlet /> */}
    </BreadcrumbArea>
=======
      <Backlinks>Home / Dashboard</Backlinks>
    </BreadcrumbContainer>
>>>>>>> d6b1cfb (styling attempt one for breadcrumb menu)
  );
};
