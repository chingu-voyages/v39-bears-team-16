import api from './api';

export interface CreateClassProps {
  name: string;
  description: string;
}

export interface CreateClassWorkProps {
  name: string;
  body: string;
}

// Class Apis

export const getPlanClasses = (id: string | undefined) => {
  return api.get(`/plans/${id}/classes`);
};

export const createClass = (
  { name, description }: CreateClassProps,
  id: string | undefined
) => {
  return api.post(`/plans/${id}/classes`, {
    name,
    description,
  });
};

export const deleteClass = (
  // id: string | undefined,
  classId: string | undefined
) => {
  return api.delete(`/classes/${classId}`);
};

// ClassWorks

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
