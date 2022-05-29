import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cb4b04cf45bb9c72c6bb51b88de686ea1d14f40d
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
<<<<<<< HEAD
=======
import styled from 'styled-components';
=======
>>>>>>> a9f12c5 (style separated to its own file)
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
<<<<<<< HEAD
    <BreadcrumbContainer>
>>>>>>> d6b1cfb (styling attempt one for breadcrumb menu)
=======
    <BreadcrumbArea>
>>>>>>> c4274cb (breadcrumb created using the use-react-router-breadcrumbs)
=======
>>>>>>> cb4b04cf45bb9c72c6bb51b88de686ea1d14f40d
      <CohortContainer>
        <CohortDash>Cohort 1: Dashboard</CohortDash>
        <CohortDash>
          <MenuIcon />
        </CohortDash>
      </CohortContainer>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c4274cb (breadcrumb created using the use-react-router-breadcrumbs)
=======
>>>>>>> cb4b04cf45bb9c72c6bb51b88de686ea1d14f40d
      <BreadcrumbContainer>
        <Breadcrumbs />
      </BreadcrumbContainer>

      {/* <Outlet /> */}
    </BreadcrumbArea>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Backlinks>Home / Dashboard</Backlinks>
    </BreadcrumbContainer>
>>>>>>> d6b1cfb (styling attempt one for breadcrumb menu)
=======
>>>>>>> c4274cb (breadcrumb created using the use-react-router-breadcrumbs)
=======
>>>>>>> cb4b04cf45bb9c72c6bb51b88de686ea1d14f40d
  );
};
