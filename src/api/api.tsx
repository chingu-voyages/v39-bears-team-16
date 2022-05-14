import axios from 'axios';

const BASE_URL = {
  LOCAL: 'http://localhost:5001',
  PROD: 'https://bears-team-16be.herokuapp.com',
};

const api = axios.create({
  baseURL: BASE_URL.PROD,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
