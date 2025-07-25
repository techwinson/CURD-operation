import axios from 'axios';

const api = axios.create({
  baseURL: 'https://curd-operation-gocn.onrender.com',
  withCredentials: true,
});

export default api;
