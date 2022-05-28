<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
>>>>>>> main
import styled from 'styled-components';
import { getAdminCohorts } from '../../api/getAdminCohorts';
import { Cohort, ErrorMessageType } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
import AdminNavbar from './AdminNavbar';
import { BreadcrumbMenu } from '../../components/BreadcrumbMenu/BreadcrumbMenu';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background.secondary}; ;
`;

<<<<<<< HEAD
// const Breadcrumbs = () => {
//   const breadcrumbs = useBreadcrumbs();
//   return (
//     <React.Fragment>
//       {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
//     </React.Fragment>
//   );
// };

const AdminMainLayout = () => {
  return (
    <div>
      <Container>
        <AdminNavbar />
        <BreadcrumbMenu />
=======
type AdminContextType = { cohorts: Cohort[] | null };

export const AdminMainLayout = () => {
  const [cohortsList, setCohortsList] = useState<Cohort[]>([]);
  const navigate = useNavigate();

  const fetchAdminCohorts = useCallback(async () => {
    try {
      const res = await getAdminCohorts();
      setCohortsList(res.data);
    } catch (error) {
      const errors = error as ErrorMessageType[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        navigate('/sign-in', { replace: true });
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchAdminCohorts();
  }, [fetchAdminCohorts]);

  return cohortsList?.length ? (
    <div>
      <Container>
        <AdminNavbar />
        <Outlet context={{ cohorts: cohortsList }} />
>>>>>>> main
      </Container>
    </div>
  ) : null;
};

export function useAdminContext() {
  return useOutletContext<AdminContextType>();
}
