import { CitySearcher } from '../../components/CitySearcher';
import { Nav } from '../../components/Nav';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="logo.png" alt="Weather Done" className={styles.logo} />
      <Nav />
      <div className={styles.container}>
        <CitySearcher />
      </div>
    </header>
  );
};