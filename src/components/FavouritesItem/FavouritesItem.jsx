import useFetchMultiple from '../../hooks/useFetchMultiple';
import { Movies } from '../Movies/Movies';

export function FavouritesItem({ id }) {
  const { data, error, loading } = useFetchMultiple(id);
  if (error || !data) {
    return <Loader />;
  }
  return <Movies films={data} />;
}
