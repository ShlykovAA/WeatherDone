import { configureStore } from '@reduxjs/toolkit';
import { cityReducer } from './slice/city';
import { weatherReducer } from './slice/weather';
import { currentWeatherReducer } from './slice/currentWeather';

export const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
    currentWeather: currentWeatherReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;