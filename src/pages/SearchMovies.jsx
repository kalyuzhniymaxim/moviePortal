import { useSearchParams } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import { getApiUrl, useFetch } from '../hooks/useFetch';

export default function SearchMovies() {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('keyword');
  const { data, error } = useFetch(getApiUrl(`/films?keyword=${searchName}`));

  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data.items} error={error} />;
}
