import api from './api';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const registerUser = ({ name, email, password }: RegisterProps) => {
  return api.post('/sign-up', {
    name,
    email,
    password,
  });
};
