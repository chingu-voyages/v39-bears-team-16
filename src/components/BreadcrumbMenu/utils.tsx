import React from 'react';
import { useParams, matchPath } from 'react-router-dom';

const DynamicBreadcrumb = () => {
  const { id } = useParams();
  return <span>{id}</span>;
};

export const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/admin', breadcrumb: null },
  { path: '/admin/cohorts/:id', breadcrumb: DynamicBreadcrumb },
];

const excludePaths = ['/', '/admin/cohorts/:id'];

export const isRouteExcluded = (pathname: string) => {
  return excludePaths.find((path) => matchPath({ path }, pathname));
};
