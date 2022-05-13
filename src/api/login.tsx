import api from './api';
import { getCsrfToken } from './getCsrfToken';

interface LoginProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginProps) => {
  return api
    .post('/login', {
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch(({ response }) => {
      console.log('ERROR', response);
      return response
        ? response.data.errors
        : [
            {
              msg: "There's an error in the login process",
            },
          ];
    });
};
