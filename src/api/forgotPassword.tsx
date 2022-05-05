import api from './api';

interface ForgotPasswordProps {
  email: string;
}

export const forgotPassword = ({ email }: ForgotPasswordProps) => {
  return api
    .post('/forgot-password', { email })
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
