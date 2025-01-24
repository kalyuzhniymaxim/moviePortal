import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { PageButton } from '../PageButton/PageButton';
import { ThemeChange } from '../ThemeChange/ThemeChange';
import styles from './Header.module.scss';

export function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { handleLogout, loading } = useAuth();
  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
          <Link to="/">
            <b>movie</b>Portal
          </Link>
          {loading ? null : isLoggedIn ? (
            <>
              
              <Link to="/favourites">
                <PageButton text={'Избранные'} />
              </Link>
              <PageButton text={'Выйти'} handle={handleLogout} />
            </>
          ) : (
            <Link to="/registration">
              <PageButton text={'Войти'} />
            </Link>
          )}
          <ThemeChange />
        </div>
      </div>
    </header>
  );
}
