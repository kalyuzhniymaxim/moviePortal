import { useSearchParams } from 'react-router-dom';

import { useGetMoviesBySearchQuery } from '../api/kinopoiskApi';
import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';


export default function SearchMovies() {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');

  const { data, error } = useGetMoviesBySearchQuery(searchName);


  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data.items} error={error} showSearch={true} />;
}