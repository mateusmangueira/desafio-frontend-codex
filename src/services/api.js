import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-desafio-codex.herokuapp.com', //URL do Heroku com o nosso backend
});

export default api;
