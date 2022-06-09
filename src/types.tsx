import { RegisterOptions } from 'react-hook-form';
export interface ValidationRuleProp {
  [x: string]: RegisterOptions;
}
export interface ErrorMessageType {
  msg: string;
  value?: string;
  param?: string;
}

export interface Cohort {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
}
