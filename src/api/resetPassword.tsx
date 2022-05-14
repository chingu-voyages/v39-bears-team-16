import api from './api';

interface ResetPasswordProps {
  email: string;
  newPassword: string;
  passwordConfirmation: string;
  token: string;
}

export const resetPassword = async ({
  email,
  newPassword,
  passwordConfirmation,
  token,
}: ResetPasswordProps) => {
  return api.post(`/reset-password`, {
    email,
    password: newPassword,
    passwordConfirmation,
    token,
  });
};
