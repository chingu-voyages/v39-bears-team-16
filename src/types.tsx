import { RegisterOptions } from 'react-hook-form';

export interface ValidationRuleInterface {
  [x: string]: RegisterOptions;
}
export interface ErrorMessageInterface {
  msg: string;
  value?: string;
  param?: string;
}

export interface PlanInterface {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  visible: boolean;
}

export interface ThemeInterface {
  color: {
    [x: string]: string;
  };
}

export interface InputFieldProps {
  hasError?: boolean;
}
