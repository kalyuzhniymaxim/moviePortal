import React from 'react';
import styles from './Movies.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardSkeleton from '../MoviesCard/MoviesCardSkeleton';
import FilmInformation from '../FilmInformation/FilmInformation';
import Search from '../Search/Search';

export default function Movies() {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((obj) => {
        console.log('kinopoisk - ' + obj);
        setFilms(obj.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.movies}>
      <p className={styles.moviesFoundResult}>
      <Search />
        <b>{films.length}</b> movies found
      </p>
      <ul className={styles.moviesList}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <MoviesCardSkeleton key={index} />)
          : films.map(({ nameRu, year, posterUrl, kinopoiskId, nameOriginal }) => (
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
