import api from './api';

export interface EnrollmentProps {
  planId: string;
}

export const getEnrolledPlans = () => {
  return api.get('/enrollments');
};

export const enrollToPlan = ({ planId }: EnrollmentProps) => {
  return api.post('/enrollments', {
    planId,
  });
};

export const unenrollPlan = ({ planId }: EnrollmentProps) => {
  return api.delete(`/enrollments/${planId}`, {});
};
