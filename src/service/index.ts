import axios from 'axios';
import {store} from 'src/store';

const local = 'http://127.0.0.1:3333/v1';
export const dev = 'https://berro-tech-api.herokuapp.com/v1';

const api = axios.create({
  baseURL: local,
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
