import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';

const initialState: string = 
  window.localStorage.getItem('myCity') === null ?
  'Kyiv' :
  `${window.localStorage.getItem('myCity')}`;


const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (_, action) => {
      return action.payload;
    }
  }
});

export const {changeCity} = citySlice.actions;

export const cityReducer = citySlice.reducer;

export const useCitySelector = () => {
  return useAppSelector((state) => state.city);
};