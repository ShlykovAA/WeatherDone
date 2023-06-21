import React from 'react';
import sun from '../icons/sun.svg';
import cloudy from '../icons/cloudy.svg';
import rain from '../icons/rain.svg';
import snow from '../icons/snow.svg';

interface IIconsSelector {
  id: string;
};

export const IconsSelector: React.FC<IIconsSelector> = ({id}) => {
  switch (id) {
    case 'Sun':
      return <img src={sun} alt="Sun" />;
    case 'Clouds':
      return <img src={cloudy} alt="Clouds" />;
    case 'Rain':
      return <img src={rain} alt="Rain" />;
    case 'Snow':
      return <img src={snow} alt="Snow" />;
    default: 
      return <img src={sun} alt="Sun" />;
  };
};