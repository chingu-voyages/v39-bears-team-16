import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bears-team-16be.herokuapp.com',
});

export default api;
