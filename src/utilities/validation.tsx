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

export const cohortValidationRules = {
  name: {
    required: 'Name is required',
  },
  startDate: {
    required: 'Start Date is required',
  },
  endDate: {
    required: 'End Date is required',
  },
};

export const classValidationRules = {
  name: {
    required: 'Class Title is required',
  },
  description: {
    required: 'Class Description is required',
  },
  date: {
    required: 'Date is required',
  },
};

export const classWorkValidationRules = {
  name: {
    required: 'Class Type is required',
  },
  body: {
    required: 'Class Description is required',
  },
};
