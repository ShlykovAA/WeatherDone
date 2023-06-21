import { useEffect } from 'react';
import { useCitySelector } from '../../store/slice/city';
import { useAppDispatch } from '../../store/hooks';
import { fetchCurrentWeather, useCurrentWeatherSelector } from '../../store/slice/currentWeather';
import { IconsSelector } from '../../assets/IconsSelector';
import { AdditionalIndicators } from '../../components/AdditionalIndicators';
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useAppDispatch();
  const city = useCitySelector();
  const currentWeather = useCurrentWeatherSelector();
  
  useEffect(() => {
    dispatch(fetchCurrentWeather(city));
  }, [city]);

  return (
    <div className={styles.main}>
      { currentWeather !== null ? (
        <>
          <h1>Current weather in {currentWeather.name}</h1>
          <div className={styles.container}>
            <div className={styles.temp_container}>
              <div className={styles.temp}>{Math.round(currentWeather.main.temp)}℃</div>
              <div className={styles.img}>
                <IconsSelector id={currentWeather.weather[0].main} />
              </div>
            </div>
            <AdditionalIndicators text="Feels like:" value={`${Math.round(currentWeather.main.feels_like)} ℃`} />
            <AdditionalIndicators text="Pressure:" value={`${currentWeather.main.pressure} hPa`} />
            <AdditionalIndicators text='Humidity:' value={`${currentWeather.main.humidity} %`} />
            <AdditionalIndicators text='Wind:' value={`${currentWeather.wind.speed} m/s`} />
          </div>
        </>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};