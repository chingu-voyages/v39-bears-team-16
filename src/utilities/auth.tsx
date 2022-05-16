import { RegisterOptions } from 'react-hook-form';

export interface ErrorMessageType {
  msg: string;
  value?: string;
  param?: string;
}
interface ValidationRuleProp {
  [x: string]: RegisterOptions;
}

const validationRules: ValidationRuleProp = {
  name: {
    required: 'Name is required',
    maxLength: {
      value: 80,
      message: 'Name cannot exceed 80 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email is invalid',
    },
  },
  password: {
    required: 'Password is required',
    maxLength: {
      value: 12,
      message: 'Password cannot exceed 12 characters',
    },
  },
  passwordConfirmation: {
    required: 'New password confirmation is required',
    maxLength: {
      value: 12,
      message: 'Password cannot exceed 12 characters',
    },
  },
  newPassword: {
    required: 'New password is required',
    maxLength: {
      value: 12,
      message: 'Password cannot exceed 12 characters',
    },
  },
};

export const getValidationRules = (field: string) => {
  return validationRules[field] ?? {};
};
