import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store/hooks';
import { changeCity } from '../../store/slice/city';
import styles from './CitySearcher.module.scss';
import { useWeatherErrorSelector } from '../../store/slice/weather';
import { useCurrentWeatherErrorSelector } from '../../store/slice/currentWeather';

const placeholder = 'Choose your city...';

const initialValue = {
  city: ''
};

const validationSchema = yup.object({
  city: yup.string().required('Enter the city')
});

export const CitySearcher = () => {
  const dispatch = useAppDispatch();
  const weatherError = useWeatherErrorSelector();
  const currentWeatherError = useCurrentWeatherErrorSelector();
  const {handleSubmit, register, getValues, formState, reset} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = () => {
    dispatch(changeCity(getValues().city));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('city')}
        className={styles.input}
        placeholder={placeholder}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
      <div className={styles.errors_container}>
      {
        formState.errors.city && formState.touchedFields.city && 
        (<p className={styles.error}>{formState.errors.city.message}</p>)
      }
      {
        weatherError !== null || currentWeatherError !== null ?
        <p className={styles.error}>City not found</p> :
        null
      }
      </div>
    </form>
  );
};