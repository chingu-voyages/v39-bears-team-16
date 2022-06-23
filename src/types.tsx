import { RegisterOptions } from 'react-hook-form';

export interface ValidationRuleInterface {
  [x: string]: RegisterOptions;
}
export interface ErrorMessageInterface {
  msg: string;
  value?: string;
  param?: string;
}

export interface CohortInterface {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
}

export interface ThemeInterface {
  color: {
    [x: string]: string;
  };
  background: {
    [x: string]: string;
  };
}
