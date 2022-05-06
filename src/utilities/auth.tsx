import { RegisterOptions } from 'react-hook-form';

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
  },
};

export const getValidationRules = (field: string) => {
  return validationRules[field] ?? {};
};

export const logout = () => {
  console.log('Logout');
};
