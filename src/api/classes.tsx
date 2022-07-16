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

export const getPlanClasses = (planId: string | undefined) => {
  return api.get(`/plans/${planId}/classes`);
};

export const createClass = (
  { name, description }: CreateClassProps,
  planId: string | undefined
) => {
  return api.post(`/plans/${planId}/classes`, {
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
  planId: string | undefined
) => {
  return api.post(`/plans/${planId}/classes/${classId}/classworks/create`, {
    classId,
    name,
    body,
  });
};
