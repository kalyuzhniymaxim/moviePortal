import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './MoviesCard.module.scss';

export default function MoviesCard({ posterUrl, nameRu, year, nameOriginal, kinopoiskId }) {
  return (
    <Link to={`/movie/${kinopoiskId}`}>
      <li className={styles.moviesCard}>
        <img className={styles.moviesCardImg} src={posterUrl} alt="poster" />
        <div className={styles.moviesCardInfo}>
          <p className={styles.moviesCardTitle}>{nameRu ?? nameOriginal}</p>
          <span className={styles.moviesCardYear}>{year}</span>
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
