import axios, { AxiosRequestConfig, Method } from 'axios';

interface CallAxiosAPI {
  url: string;
  method: Method;
  data?: any;
  headers?: any;
  params?: any;
}

const baseUrl = 'http://localhost:4000/';

export const callAxios = ({
  url,
  method,
  data,
  headers,
  params,
}: CallAxiosAPI) => {
  const config: AxiosRequestConfig<any> = {
    method: method || 'GET',
    url: `${baseUrl}${url}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers,
    },
    data,
    params,
  };
  return axios(config)
    .then((response) => response.data)
    .catch((error) => {
      console.log('error', {
        error,
      });
      return {
        status: 'error',
        message: 'Something went wrong',
      };
    });
};
