import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';


const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes]
}



const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
const REQUEST_TIMEOUTE = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUTE,
  });

  // Перехватчик для запросов
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
