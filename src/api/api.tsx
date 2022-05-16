import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_PROD, // change to REACT_APP_API_LOCAL if you want to run with backend locally
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errMessages = error.response?.data?.errors
      ? error.response.data.errors
      : [{ msg: 'There is an error in the request' }];
    return Promise.reject(errMessages);
  }
);

export default api;
