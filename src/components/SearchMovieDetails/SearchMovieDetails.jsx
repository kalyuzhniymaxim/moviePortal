import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardSkeleton from '../MoviesCard/MoviesCardSkeleton';

export function SearchMovieDetails(films) {
  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <MoviesCardSkeleton key={index} />
            ))
          : films.map(
              ({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
                <MoviesCard
                  key={kinopoiskId}
                  nameRu={nameRu}
                  year={year}
                  posterUrl={posterUrl}
                  nameOriginal={nameOriginal}
                  kinopoiskId={kinopoiskId}
                />
              ),
            )}
      </ul>
    </div>
  );
}
