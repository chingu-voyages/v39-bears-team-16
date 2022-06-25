import api from './api';

interface LoginProps {
  email: string;
  password: string;
}

export const login = ({ email, password }: LoginProps) => {
  return api.post('/sign-in', {
    email,
    password,
  });
};
