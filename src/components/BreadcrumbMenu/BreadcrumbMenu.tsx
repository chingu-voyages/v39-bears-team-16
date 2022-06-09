import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {
  navLinkStyles,
  activeStyle,
  BreadcrumbArea,
  CohortContainer,
  CohortDash,
  BreadcrumbContainer,
} from './BreadcrumbMenu.styled';
import { isRouteExcluded, routes } from './utils';

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
        <CohortDash></CohortDash>
      </CohortContainer>
      <BreadcrumbContainer>
        <Breadcrumbs />
      </BreadcrumbContainer>
    </BreadcrumbArea>
  );
};
