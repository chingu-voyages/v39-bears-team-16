import axios from 'axios';
import { ERROR_MESSAGES } from '../utilities/constants';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
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
    let errMessages = [
      { msg: ERROR_MESSAGES.default, status: error.response.status },
    ];
    if (error.response.status === 401) {
      errMessages = [
        { msg: ERROR_MESSAGES.unauthorized, status: error.response.status },
      ];
    } else if (error.response?.data?.errors) {
      errMessages = error.response.data.errors;
    }

    return Promise.reject(errMessages);
  }
);

export default api;
