import axios from 'axios';


const axiosApi = axios.create({
  baseURL: 'http://192.168.1.90:8000', 
  timeout: 10000,                   
  headers: {
    'Content-Type': 'multipart/form-data',    
    'Accept': 'application/json',
  },
});

axiosApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('No autorizado, redirigiendo al login...');
    }
    return Promise.reject(error);
  }
);

export default axiosApi;