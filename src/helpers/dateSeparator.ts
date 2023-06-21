import { IFiveDayWeatherData, IWeatherData } from '../store/types';
import { whatDayAndMonth } from './whatDayAndMonth';

type IDataReaper = (weatherData: IFiveDayWeatherData | null, day: number) => IWeatherData[];

export const dateSeparator :IDataReaper = (weatherData, day) => {
  const dayArray = weatherData!.list.filter((item)=>{
    return whatDayAndMonth(item.dt).day === day;
  });
  return dayArray;
};