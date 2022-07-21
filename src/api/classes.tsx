import api from './api';

export interface CreateClassProps {
  name: string;
  description: string;
  completed?: boolean; // to be removed once backend is updated
  classworks?: CreateClassWorkProps[] | undefined;
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

export const editClass = (
  { name, description, classworks }: CreateClassProps,
  classId: string | undefined
) => {
  return api.put(`/classes/${classId}`, {
    classId,
    name,
    description,
    classworks,
  });
};

// ClassWorks

export const createClassWorks = (
  { name, body }: CreateClassWorkProps,
  classId: string | undefined
) => {
  return api.post(`classes/${classId}/classworks`, {
    classId,
    name,
    body,
  });
};
