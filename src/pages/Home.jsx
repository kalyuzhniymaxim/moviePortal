import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import { getApiUrl, useFetch } from '../hooks/useFetch';

export default function Home() {
  const { data, loading, error } = useFetch(getApiUrl('/films'));

  if (error || !data) {
    return <Loader />;
  }

  return <Movies films={data.items} isLoading={loading} />;
}
