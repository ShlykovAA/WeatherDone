import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import { IWeather, IWeatherData } from '../types';
import { url } from '../../consts/url';

const initialState: IWeather<IWeatherData> = {
  loading: false,
  data: null,
  error: null
};

export const fetchCurrentWeather = createAsyncThunk<IWeatherData, string>(
  'currentWeather/fetch',
  async (city) => {
    const response = await fetch(`${url}/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_ACCESS_TOKEN}`);
    const data = await response.json();
    if (!response.ok) {
      throw "City not found";
    };
    return data;
  }
);

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        window.localStorage.setItem('myCity', `${action.payload.name}`)
      })
      .addCase(fetchCurrentWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export const currentWeatherReducer = currentWeatherSlice.reducer;

export const useCurrentWeatherSelector = () => {
  return useAppSelector((state) => state.currentWeather.data);
};

export const useCurrentWeatherErrorSelector = () => {
  return useAppSelector((state) => state.currentWeather.error);
};