import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 1 auto;
  width: 80vw;
`;

type AdminContextType = { cohorts: Cohort[] | null };

export const AdminMainLayout = () => {
  const [cohortsList, setCohortsList] = useState<Cohort[]>([]);
  // const navigate = useNavigate();

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
  }, []);

  useEffect(() => {
    fetchAdminCohorts();
  }, [fetchAdminCohorts]);

  // return cohortsList?.length ? (
  return (
    <div>
      <Container>
        <AdminNavbar />
        <Section>
          <BreadcrumbMenu />
          <Outlet context={{ cohorts: cohortsList }} />
        </Section>
      </Container>
    </div>
  );
  // ) : null;
};

export function useAdminContext() {
  return useOutletContext<AdminContextType>();
}
