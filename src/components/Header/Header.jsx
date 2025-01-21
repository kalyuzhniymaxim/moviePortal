import { Link } from 'react-router-dom';

import { PageButton } from '../PageButton/PageButton';
// import { Search } from '../Search/Search';
import { ThemeChange } from '../ThemeChange/ThemeChange';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>netflix</b>roulette
          </Link>
          <Link to="/registration">
            <PageButton text={'Log In'} />
          </Link>
          <ThemeChange />
        </div>

        {/* <Search /> */}
      </div>
    </header>
  );
}
