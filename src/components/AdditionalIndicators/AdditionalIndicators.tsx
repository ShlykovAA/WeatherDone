import React from 'react';
import styles from './AdditionalIndicators.module.scss';

interface IAddIndicators {
  text: string;
  value: string;
};

export const AdditionalIndicators: React.FC<IAddIndicators> = ({text, value}) => {
  return (
    <div className={styles.add_info_container}>
      <p className={styles.p}>{text}</p>
      <p className={styles.p}>{value}</p>
    </div>
  );
};