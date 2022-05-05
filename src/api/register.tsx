import api from './api';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const registerUser = ({ name, email, password }: RegisterProps) => {
  return api
    .post('/register', {
      name,
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch(({ response }) => {
      return response
        ? response.data.errors
        : [
            {
              msg: "There's an error in the registration process",
            },
          ];
    });
};
