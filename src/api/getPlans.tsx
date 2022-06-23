import { CohortInterface } from '../types';
import api from './api';

export const getPlans = () => {
  return api.get<CohortInterface[]>('/admin/cohorts');
};
