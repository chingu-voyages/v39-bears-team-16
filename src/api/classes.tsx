/* eslint-disable prettier/prettier */
import { ClassworkInterface } from 'types';
import api from './api';

export interface CreateClassProps {
  name: string;
  description: string;
  classworks?: ClassworkInterface[] | undefined;
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
  { name, description, link }: ClassworkInterface,
  classId: string | undefined
) => {
  return api.post(`classes/${classId}/classworks`, {
    classId,
    name,
    description,
    link,
  });
};

export const markClassworkAsComplete = ({
  planId,
  classId,
  classworkId,
  val,
}) => {
  return api.post(`classes/${classId}/classworks/${classworkId}`, {
    planId,
    val,
  });
};
