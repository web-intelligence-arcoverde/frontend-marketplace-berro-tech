/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import store from 'src/store';

const local = 'http://127.0.0.1:3333/v1';

const api = axios.create({ baseURL: local });

api.interceptors.request.use(
  (config: any) => {
    const { token } = store.getState().auth;
    const headers = {
      ...config.headers
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return {
      ...config,
      headers
    };
  },
  (error) => {
    console.log(error);
    window.location.href = '/';
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch({ type: 'auth/sign-out-request' });
    }
  }
);

export default api;
