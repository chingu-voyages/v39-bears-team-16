import api from './api';

export interface AdminCreateCohortProps {
  name: string;
  startDate: string;
  endDate: string;
}

export const adminCreateCohort = ({
  name,
  startDate,
  endDate,
}: AdminCreateCohortProps) => {
  return api.post('/admin/cohorts/create', {
    name,
    startDate,
    endDate,
  });
};
