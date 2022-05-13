import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bears-team-16be.herokuapp.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
