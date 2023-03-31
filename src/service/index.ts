import axios from 'axios';
import {store} from 'src/store';

const local = 'https://api.berrotech.com.br/v1';

const api = axios.create({
  baseURL: local,
});

api.interceptors.request.use((config: any) => {
  const {token} = store.getState().user;
  const headers = {...config.headers};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return {...config, headers};
});

export default api;
