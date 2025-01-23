import { useSelector } from 'react-redux';

import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import styles from './FilmInformation.module.scss';

export function FilmInformation({ filmDetails }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(filmDetails);
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