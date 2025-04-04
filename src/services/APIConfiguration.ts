import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Reemplaza con tu URL base
  headers: {
    'Content-Type': 'application/json',
    // Añade más cabeceras si es necesario
  },
});

export default axiosInstance;
