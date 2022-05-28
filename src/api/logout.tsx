import api from './api';

export const logout = () => {
  return api.post('/logout');
};
