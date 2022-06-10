import api from './api';

export const getAdminClass = (id: string | undefined) => {
  return api.get(`/admin/cohorts/${id}/classes`);
};

export interface AdminCreateClassProps {
  name: string;
  subject: string;
  date: string;
}

export const adminCreateClass = (
  { name, subject, date }: AdminCreateClassProps,
  id: string | undefined
) => {
  return api.post(`/admin/cohorts/${id}/classes/create`, {
    name,
    subject,
    date,
  });
};
