import { OneDay } from '../OneDay';
import { dateSeparator } from '../../helpers/dateSeparator';
import { whatDatesInResponse } from '../../helpers/whatDatesInResponse';
import { useWeatherSelector } from '../../store/slice/weather';
import styles from './FiveDaysWeather.module.scss';
import { IWeatherData } from '../../store/types';

export const FiveDaysWeather = () => {
  const weather = useWeatherSelector();
  const daysSet = whatDatesInResponse(weather);
  const weatherDividedIntoDays:IWeatherData[][] = [];
  
  daysSet.forEach((item) => {
    weatherDividedIntoDays.push(dateSeparator(weather, item)) 
  });

  return (
    <div className={styles.cards}>
      {weatherDividedIntoDays.map((item, index) => <OneDay oneDayWeatherData={item} key={index} />)}
    </div>
  );
};