import api from './api';

export const fetchCsrfToken = () => {
  return api.get('/fetchCsrfToken', {}).then((res) => {
    return res;
  });
};

export const getCsrfToken = async () => {
  const response = await fetchCsrfToken();
  api.defaults.headers.common['X-CSRF-Token'] = response.data.csrfToken;
  return response.data.csrfToken;
};
