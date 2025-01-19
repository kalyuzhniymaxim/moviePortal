import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './FilmInformation.module.scss';
import Loader from '../Loader/Loader';

export default function FilmInformation () {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(filmDetails);

  //   console.log(kinopoiskId);

  React.useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    setIsLoading(true);
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFilmDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

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
};


