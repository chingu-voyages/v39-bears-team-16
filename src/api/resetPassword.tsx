import api from './api';

interface ResetPasswordProps {
  email: string;
  newPassword: string;
  passwordConfirmation: string;
  token: string;
}

export const resetPassword = ({
  email,
  newPassword,
  passwordConfirmation,
  token,
}: ResetPasswordProps) => {
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
