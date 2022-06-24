import api from './api';

export const getPlans = () => {
  return api.get('/plans');
};
