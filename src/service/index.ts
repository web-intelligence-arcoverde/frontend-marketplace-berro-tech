import axios from 'axios';
import {store} from 'src/store';

const local = 'http://127.0.0.1:3333/v1';
const dev = 'https://api.berrotech.com.br/v1';

const api = axios.create({
  baseURL: dev,
});

api.interceptors.request.use((config: any) => {
  const {token} = store.getState().auth;
  const headers = {...config.headers};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {...config, headers};
});

export default api;
