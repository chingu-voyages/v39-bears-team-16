import React, { useEffect, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { getAdminCohorts } from '../../api/getAdminCohorts';
import { Cohort, ErrorMessageType } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
import AdminNavbar from './AdminNavbar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background.secondary}; ;
`;

type AdminContextType = { cohorts: Cohort[] | null };

export const AdminMainLayout = () => {
  const [cohortsList, setCohortsList] = useState<Cohort[]>([]);
  // const navigate = useNavigate();

  const fetchAdminCohorts = async () => {
    try {
      const res = await getAdminCohorts();
      setCohortsList(res.data);
    } catch (error) {
      const errors = error as ErrorMessageType[];
      if (errors?.[0]?.msg === ERROR_MESSAGES.unauthorized) {
        /* TODO: commented for easier development on the admin pages for now
            This should be uncommented when we're ready to have it in place
        */
        //   navigate('/sign-in', { replace: true });
      }
    }
  };

  useEffect(() => {
    fetchAdminCohorts();
  });

  return (
    // cohortsList.length ? (
    <div>
      <Container>
        <AdminNavbar />
        <Outlet context={{ cohorts: cohortsList }} />
      </Container>
    </div>
    // ) : null;
  );
};

export function useAdminContext() {
  return useOutletContext<AdminContextType>();
}
