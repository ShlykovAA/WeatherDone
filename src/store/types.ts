export interface IWeather<D> {
  loading: boolean;
  data: null | D;
  error: null | any;
};

export interface IWeatherData {
  dt: number;
  name?: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
  }[]
};

export interface IFiveDayWeatherData {
  city: {
    name: string;
  };
  list: IWeatherData[];
};