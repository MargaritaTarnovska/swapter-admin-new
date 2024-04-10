import { AuthService } from '@util/auth/auth-service.ts';
import axios, { AxiosError } from 'axios';

const Api = axios.create();

Api.interceptors.response.use(undefined, async (error: AxiosError) => {
  const { config, response } = error;
  console.log(config);

  if (response?.status === 401) {
    window.location.assign('/auth/login');
    await AuthService.unregisterUser();
    return;
  } else {
    return Promise.reject(error);
  }
});

Api.defaults.baseURL = import.meta.env.VITE_API_URL;

Api.defaults.withCredentials = true;

export { Api };
