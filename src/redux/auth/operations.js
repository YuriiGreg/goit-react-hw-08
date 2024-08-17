import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

// Налаштування базової URL для axios
axios.defaults.baseURL = API_URL;

// Функція для встановлення токена в заголовки авторизації
const setAuthHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Функція для видалення токена з заголовків авторизації
const clearAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthHeader(token); // Встановлюємо токен у заголовки
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthHeader(token); // Встановлюємо токен у заголовки
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      
      localStorage.removeItem('token');
      clearAuthHeader(); // Видаляємо токен із заголовків
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('No token available');
    }
    setAuthHeader(token); // Встановлюємо токен у заголовки перед запитом

    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


