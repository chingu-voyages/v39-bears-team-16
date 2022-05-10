import api from './api';
import { getCsrfToken } from './getCsrfToken';

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
  const csrfToken = await getCsrfToken();

  return api
    .post(`/reset-password/${token}`, {
      email,
      newPassword,
      passwordConfirmation,
      token,
      _csrf: csrfToken,
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
