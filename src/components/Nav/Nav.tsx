import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>Сurrent</NavLink>
      <span className={styles.line}></span>
      <NavLink to="/5days" className={styles.link}>Next 120 hours</NavLink>
    </nav>
  );
};