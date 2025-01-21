import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './MoviesCard.module.scss';

export default function MoviesCard({
  posterUrl,
  nameRu,
  year,
  nameOriginal,
  kinopoiskId,
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Link to={`/movie/${kinopoiskId}`}>
      <li className={styles.moviesCard}>
        <img className={styles.moviesCardImg} src={posterUrl} alt="poster" />
        <div className={styles.moviesCardInfo}>
          <p className={styles.moviesCardTitle}>{nameRu ?? nameOriginal}</p>
          <span className={styles.moviesCardYear}>{year}</span>
          {isLoggedIn && <button>избранное</button>}
        </div>
      </li>
    </Link>
  );
}

MoviesCard.PropTypes = {
  posterUrl: PropTypes.string.isRequired,
  nameRu: PropTypes.string,
  year: PropTypes.string.isRequired,
  nameOriginal: PropTypes.string,
};
