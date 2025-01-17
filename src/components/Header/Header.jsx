import ThemeChange from '../ThemeChange/ThemeChange';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>movie</b>Portal
          </Link>
          <Link to="/signin">
            <button className={styles.headerLogoBtn}>Log In</button>
          </Link>
          <ThemeChange />
        </div>
      </div>
    </header>
  );
}
