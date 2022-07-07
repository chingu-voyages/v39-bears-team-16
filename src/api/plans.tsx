import api from './api';

export interface AddUpdatePlanProps {
  name: string;
  description: string;
  planId?: string;
}

export const getPlans = () => {
  return api.get('/plans');
};

export const getEnrolledPlans = () => {
  return api.get('/enrollments');
};

export const getOwnedPlans = () => {
  return api.get('/user/plans');
};

export const addNewPlan = ({ name, description }: AddUpdatePlanProps) => {
  return api.post('/plans', {
    name,
    description,
  });
};

export const updatePlan = ({ planId, ...rest }: AddUpdatePlanProps) => {
  return api.put(`/plans/${planId}`, {
    ...rest,
  });
};
