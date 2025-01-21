import { useParams } from 'react-router-dom';

import { FilmInformation } from '../components/FilmInformation/FilmInformation';
import { Loader } from '../components/Loader/Loader';
import { getApiUrl, useFetch } from '../hooks/useFetch';

export default function MovieInformation() {
  const { id } = useParams();
  const { data, error } = useFetch(getApiUrl(`/films/${id}`));

  if (error || !data) {
    return <Loader />;
  }
  return <FilmInformation filmDetails={data} />;
}
