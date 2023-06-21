import { IconsSelector } from '../../assets/IconsSelector';
import { whatHour } from '../../helpers/whatHour';
import { IWeatherData } from '../../store/types';
import styles from './HoursWeather.module.scss';

interface IHoursWeather {
  hourWeatherData: IWeatherData;
};

export const HoursWeather: React.FC<IHoursWeather> = ({hourWeatherData}) => {
  const temperature = Math.floor(hourWeatherData.main.temp)
  const hour = whatHour(hourWeatherData.dt)
  return (
    <div className={styles.container}>
      <div className={styles.temp}>{hour}:00</div>
      <div className={styles.temp}>{temperature} ℃</div>
      <div className={styles.img}>
        <IconsSelector id={hourWeatherData.weather[0].main}/>
      </div>
    </div>
  );
};