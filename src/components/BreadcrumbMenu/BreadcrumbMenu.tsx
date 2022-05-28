import React from 'react';
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
