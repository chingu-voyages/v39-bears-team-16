import api from './api';

export const getCsrfToken = async () => {
  await api.get('/fetchCsrfToken', {}).then((res) => {
    api.defaults.headers.post['X-CSRF-Token'] = res.data.csrfToken;
    api.defaults.headers.delete['X-CSRF-Token'] = res.data.csrfToken;
  });
};
