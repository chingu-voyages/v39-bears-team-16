import api from './api';

export const getPlanClasses = (id: string | undefined) => {
  return api.get(`/plans/${id}/classes`);
};

export interface CreateClassProps {
  name: string;
  description: string;
}

export interface CreateClassWorkProps {
  name: string;
  body: string;
}

export const createClass = (
  { name, description }: CreateClassProps,
  id: string | undefined
) => {
  return api.post(`/plans/${id}/classes`, {
    name,
    description,
  });
};

export const createClassWorks = (
  { name, body }: CreateClassWorkProps,
  classId: string | undefined,
  id: string | undefined
) => {
  return api.post(`/plans/${id}/classes/${classId}/classworks/create`, {
    classId,
    name,
    body,
  });
};
