import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/slices/authSlice';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import styles from './FilmInformation.module.scss';

export function FilmInformation({ filmDetails }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.filmInformation}>
      <img
        className={styles.filmPoster}
        src={filmDetails.posterUrlPreview}
        alt={filmDetails.nameRu || filmDetails.nameOriginal}
      />

      <div className={styles.filmDetails}>
        {isLoggedIn && <FavoriteButton kinopoiskId={filmDetails.kinopoiskId} />}
        <h1>{filmDetails.nameRu || filmDetails.nameOriginal}</h1>
        <p>{filmDetails.description ?? 'Описание фильма в разработке...'}</p>
      </div>
    </div>
  );
}

FilmInformation.propTypes = {
  filmDetails: PropTypes.shape({
    posterUrlPreview: PropTypes.string,
    nameRu: PropTypes.string,
    nameOriginal: PropTypes.string,
    kinopoiskId: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
