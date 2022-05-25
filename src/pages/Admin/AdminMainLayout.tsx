import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
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
        // navigate('/sign-in', { replace: true });
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchAdminCohorts();
  }, [fetchAdminCohorts]);

<<<<<<< HEAD
  // return cohortsList?.length ? (
  return (
=======
  return cohortsList?.length ? (
<<<<<<< HEAD
=======
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
>>>>>>> c4274cb (breadcrumb created using the use-react-router-breadcrumbs)
>>>>>>> 66387d6 (breadcrumb created using the use-react-router-breadcrumbs)
=======
>>>>>>> 3abc66c (fixed netlify error)
    <div>
      <Container>
        <AdminNavbar />
        <Outlet context={{ cohorts: cohortsList }} />
      </Container>
    </div>
  );
  // ) : null;
};

export function useAdminContext() {
  return useOutletContext<AdminContextType>();
}
