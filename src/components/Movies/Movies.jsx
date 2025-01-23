import React from 'react';

import {MoviesCard} from '../MoviesCard/MoviesCard';
import {Search} from '../Search/Search';
import styles from './Movies.module.scss';

export function Movies({ films, isLoading, error, showSearch = false }) {
    if (error || !films) {
    return <Loader />;
  }
  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
      {showSearch && <Search />}
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {films.map(({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
          <MoviesCard
            key={kinopoiskId}
            nameRu={nameRu}
            year={year}
            posterUrl={posterUrl}
            nameOriginal={nameOriginal}
            kinopoiskId={kinopoiskId}
          />
        ))}
      </ul>
    </div>
  );
}
