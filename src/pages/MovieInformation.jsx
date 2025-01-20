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
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'cfd088f5-c917-4302-abb3-249d8da7585f',
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
