import { whatDayAndMonth } from './whatDayAndMonth';
import { IFiveDayWeatherData, IWeatherData } from '../store/types';

export const whatDatesInResponse = (weatherData: IFiveDayWeatherData | null) => {
  let setDays = new Set<number>();
  weatherData!.list.forEach((item: IWeatherData) => {
    setDays.add(whatDayAndMonth(item.dt).day)
  });
  return setDays;
};