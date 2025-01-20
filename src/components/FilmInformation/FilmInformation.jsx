import React from 'react';

import styles from './FilmInformation.module.scss';

export default function FilmInformation({ filmDetails }) {
  return (
    <div className={styles.filmInformation}>
      <img
        className={styles.filmPoster}
        src={filmDetails.posterUrlPreview}
        alt={filmDetails.nameRu || filmDetails.nameOriginal}
      />
      <div className={styles.filmDetails}>
        <h1>{filmDetails.nameRu || filmDetails.nameOriginal}</h1>
        <p>{filmDetails.description ?? 'Описание фильма в разработке...'}</p>
      </div>
    </div>
  );
}
