import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useCitySelector } from '../../store/slice/city';
import { fetchWeather, useWeatherSelector } from '../../store/slice/weather';
import { FiveDaysWeather } from '../../sections/FiveDaysWeather';

export const FiveDays = () => {
  const dispatch = useAppDispatch();
  const city = useCitySelector();
  const weather = useWeatherSelector();
  
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city]);

  return (
    <div>
      { weather !== null ? (
        <>
          <h1>These are the next 120 hours of weather in {weather.city.name}</h1>
          <FiveDaysWeather />
        </>
      ) : (
        <p>City not found</p>
      )}
    </div>
  );
};