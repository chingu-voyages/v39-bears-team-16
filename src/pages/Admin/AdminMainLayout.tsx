import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { getAdminCohorts } from '../../api/getAdminCohorts';
import { Cohort, ErrorMessageType } from '../../types';
import { ERROR_MESSAGES } from '../../utilities/constants';
import AdminNavbar from './AdminNavbar';
import { BreadcrumbMenu } from '../../components/BreadcrumbMenu/BreadcrumbMenu';
import { getCsrfToken } from '../../api/getCsrfToken';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.background.secondary}; ;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 1 auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
    getCsrfToken();
    fetchAdminCohorts();
  }, [fetchAdminCohorts]);

  return (
    <Container>
      <AdminNavbar />
      <Section>
        <BreadcrumbMenu />
        <Outlet context={{ cohorts: cohortsList }} />
      </Section>
    </Container>
  );
};

export function useAdminContext() {
  return useOutletContext<AdminContextType>();
}
