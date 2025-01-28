import { useGetInitialMoviesQuery } from '../api/kinopoiskApi';
import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';

export default function Home() {
  const { data, loading, error } = useGetInitialMoviesQuery();

  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data} showSearch={true}/>;
}
