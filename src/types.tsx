import { RegisterOptions } from 'react-hook-form';

export interface ValidationRuleInterface {
  [x: string]: RegisterOptions;
}
export interface ErrorMessageInterface {
  msg: string;
  value?: string;
  param?: string;
}

export interface ClassworkInterface {
  _id?: string;
  name: string;
  link: string;
  type: string;
  description: string;
  classworkProgress: 0 | 1;
}
export interface ClassInterface {
  _id: string;
  name: string;
  description: string;
  classProgress: number;
  classworks: ClassworkInterface[];
}

export interface PlanInterface {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  visible: boolean;
  progress: number;
  likes: number;
  tags: string[];
  createdBy: string;
  planProgress: number;
}

export interface ThemeInterface {
  color: {
    [x: string]: string;
  };
}

export interface InputFieldProps {
  hasError?: boolean;
}

export enum ClassworkTypes {
  ASSIGNMENT = 'assignment',
  MATERIAL = 'material',
}
