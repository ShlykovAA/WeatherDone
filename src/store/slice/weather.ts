import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFiveDayWeatherData, IWeather } from '../types';
import { useAppSelector } from '../hooks';
import { url } from '../../consts/url';

const initialState: IWeather<IFiveDayWeatherData> = {
  loading: false,
  data: null,
  error: null
};

export const fetchWeather = createAsyncThunk<IFiveDayWeatherData, string>(
  'weather/fetch',
  async (city) => {
    const resp = await fetch(`${url}/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_ACCESS_TOKEN}`);
    const data = await resp.json();
    if (!resp.ok) {
      throw 'City not found';
    };
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      window.localStorage.setItem('myCity', action.payload.city.name)
    })
    .addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
});

export const weatherReducer = weatherSlice.reducer;

export const useWeatherSelector = () => {
  return useAppSelector((state) => state.weather.data);
};

export const useWeatherErrorSelector = () => {
  return useAppSelector((state) => state.weather.error);
};