import api from './api';

interface ForgotPasswordProps {
  email: string;
}

export const forgotPassword = ({ email }: ForgotPasswordProps) => {
  return api.post('/forgot-password', { email });
};
