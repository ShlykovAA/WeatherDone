import React from 'react';
import { whatDayAndMonth } from '../../helpers/whatDayAndMonth';
import { MONTHS } from '../../consts/months';
import { HoursWeather } from '../../components/HoursWeather';
import styles from './OneDay.module.scss';
import { IWeatherData } from '../../store/types';

interface IOneDay {
  oneDayWeatherData: IWeatherData[];
}

export const OneDay: React.FC<IOneDay> = ({oneDayWeatherData}) => {
  const dayAndMonth = whatDayAndMonth(oneDayWeatherData['0'].dt)
  return (
    <div className={styles.container_for_date}>
      <div className={styles.date}>
        <p className={styles.margin}>{dayAndMonth.day}</p>
        <p className={styles.margin}>{MONTHS[dayAndMonth.month]}</p>
      </div>
      {
        oneDayWeatherData.map((item, index) => <HoursWeather hourWeatherData={item} key={index} />)
      }
    </div>
  );
};