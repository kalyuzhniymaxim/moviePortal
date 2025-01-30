import { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineExitToApp } from "react-icons/md";
import { MdLogin } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { selectIsLoggedIn } from '../../redux/slices/authSlice';
import { PageButton } from '../PageButton/PageButton';
import { RiMovieLine } from 'react-icons/ri';
import { ThemeChange } from '../ThemeChange/ThemeChange';
import styles from './Header.module.scss';

export function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { handleLogout, loading } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className="page-container">
        <div className={styles.headerLogo}>
        <Link to="/" >
            {isMobile ? (
              <RiMovieLine size={40} />
             ) : (
              <p><b>movie</b>Portal</p>
            )}
         </Link>

          {loading ? null : isLoggedIn ? (
            <div className={styles.headerButtons}>
              {isMobile ? (
                <>
                  <Link to="/favourites" className={styles.headerButton}>
                    <FaRegHeart size={40} />
                  </Link>
                  <Link onClick={handleLogout} className={styles.headerButton}>
                    <MdOutlineExitToApp size={40} color='white'/>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/favourites">
                    <PageButton text={'Избранные'} />
                  </Link>
                  <PageButton text={'Выйти'} handle={handleLogout} />
                </>
              )}
            </div>
          ) : isMobile ? (
            <Link to="/registration" className={styles.headerButton}>
              <MdLogin  size={40}/>
            </Link>
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