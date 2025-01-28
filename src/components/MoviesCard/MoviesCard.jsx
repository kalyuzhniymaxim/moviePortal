import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/slices/authSlice';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import styles from './MoviesCard.module.scss';

export function MoviesCard({
  posterUrl,
  nameRu,
  year,
  nameOriginal,
  kinopoiskId,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <li className={styles.moviesCard}>
      <Link to={`/movie/${kinopoiskId}`}>
        <img className={styles.moviesCardImg} src={posterUrl} alt="poster" />
      </Link>
      <div>
        <div className={styles.moviesCardInfo}>
          <p className={styles.moviesCardTitle}>{nameRu ?? nameOriginal}</p>
          <span className={styles.moviesCardYear}>{year}</span>
        </div>
        {isLoggedIn && <FavoriteButton kinopoiskId={kinopoiskId} />}
      </div>
    </li>
  );
}
MoviesCard.propTypes = {
  posterUrl: PropTypes.string,
  nameRu: PropTypes.string,
  year: PropTypes.number,
  nameOriginal: PropTypes.string,
};
