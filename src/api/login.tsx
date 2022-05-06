import api from './api';

interface LoginProps {
  email: string;
  password: string;
}

export const login = ({ email, password }: LoginProps) => {
  return api
    .post('/login', {
      email,
      password,
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
