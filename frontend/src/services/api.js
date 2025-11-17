import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const carAPI = {
  getAllCars: async () => {
    const response = await api.get('/cars');
    return response.data;
  },

  getCarById: async (id) => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  },

  searchCars: async (query) => {
    const response = await api.get(`/cars/search?q=${query}`);
    return response.data;
  },

  filterCars: async (filters) => {
    const params = new URLSearchParams(filters);
    const response = await api.get(`/cars/filter?${params}`);
    return response.data;
  },
};

export default api;