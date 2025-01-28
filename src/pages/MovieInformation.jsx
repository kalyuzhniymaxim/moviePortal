import { useParams } from 'react-router-dom';

import { useGetMoviesByIdQuery } from '../api/kinopoiskApi';
import { FilmInformation } from '../components/FilmInformation/FilmInformation';
import { Loader } from '../components/Loader/Loader';

export default function MovieInformation() {
  const { id } = useParams();

  const { data, error } = useGetMoviesByIdQuery(id);

  if (error || !data) {
    return <Loader />;
  }
  return <FilmInformation filmDetails={data} />;
}
