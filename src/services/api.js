import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'https://backend-desafio-codex.herokuapp.com', //URL do Heroku com o nosso backend
});


api.interceptors.request.use(async config => {
  const { token } = store.getState().auth

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
