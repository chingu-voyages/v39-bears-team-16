import api from './api';
import { getCsrfToken } from './getCsrfToken';

interface ResetPasswordProps {
  email: string;
  newPassword: string;
  passwordConfirmation: string;
}

export const resetPassword = ({
  email,
  newPassword,
  passwordConfirmation,
}: ResetPasswordProps) => {
  const token = getCsrfToken();
  return api
    .post(`/reset-password/${token}`, {
      email,
      newPassword,
      passwordConfirmation,
    })
    .then((res) => {
      return res;
    })
    .catch(({ response }) => {
      return response
        ? response.data.errors
        : [
            {
              msg: "There's an error in the request",
            },
          ];
    });
};
