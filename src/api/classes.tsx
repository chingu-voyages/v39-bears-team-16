/* eslint-disable prettier/prettier */

import { EditorClassProps, EditorClassworkInterface } from 'pages/Editor/Classes/classTypes';
import api from './api';

// Class Apis

export const getPlanClasses = (planId: string | undefined) => {
  return api.get(`/plans/${planId}/classes`);
};

export const createClass = (
  { name, description }: EditorClassProps,
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
  { name, description, classworks }: EditorClassProps,
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
  { name, description, link }: EditorClassworkInterface,
  classId: string | undefined
) => {
  return api.post(`classes/${classId}/classworks`, {
    classId,
    name,
    description,
    link
  });
};
