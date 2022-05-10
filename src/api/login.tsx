import api from './api';
import { getCsrfToken } from './getCsrfToken';

interface LoginProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginProps) => {
  const csrfToken = await getCsrfToken();
  return api
    .post('/login', {
      email,
      password,
      _csrf: csrfToken,
    })
    .then((res) => {
      console.log('login res', res);
      return res;
    })
    .catch(({ response }) => {
      console.log('response error', response);
      return response
        ? response.data.errors
        : [
            {
              msg: "There's an error in the login process",
            },
          ];
    });
};
