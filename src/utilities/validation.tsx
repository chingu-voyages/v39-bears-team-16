import { ValidationRuleInterface } from '../types';

export const authValidationRules: ValidationRuleInterface = {
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

export const planValidationRules = {
  name: {
    required: 'Plan name is required',
  },
  description: {
    required: 'Plan description is required',
  },
};

export const classValidationRules = {
  name: {
    required: 'Class Title is required',
  },
  description: {
    required: 'Class Description is required',
  },
};

export const classWorkValidationRules = {
  name: {
    required: 'Class Type is required',
  },
  description: {
    required: 'Class Description is required',
  },
};
