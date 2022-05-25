import api from './api';

export const getAdminCohorts = () => {
  return api.get('/admin/cohorts');
};
