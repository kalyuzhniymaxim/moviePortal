import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import FilmInformation from '../components/FilmInformation/FilmInformation';

export default function MovieInformation() {
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const apiKey = import.meta.env.VITE_API_KEY;
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
  return <FilmInformation filmDetails={filmDetails} />;
}
