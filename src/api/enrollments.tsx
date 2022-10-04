import api from './api';

export interface EnrollmentProps {
  planId: string;
}

export const getEnrolledPlans = () => {
  return api.get('/enrolments');
};

export const enrollToPlan = ({ planId }: EnrollmentProps) => {
  return api.post(`/enrolments/${planId}`);
};

export const unenrollPlan = ({ planId }: EnrollmentProps) => {
  return api.delete(`/enrolments/${planId}`);
};
