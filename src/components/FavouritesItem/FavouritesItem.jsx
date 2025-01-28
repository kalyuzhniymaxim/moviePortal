import useFetchMultiple from '../../hooks/useFetchMultiple';
import { Movies } from '../Movies/Movies';

export function FavouritesItem({ id }) {
  const { data, error } = useFetchMultiple(id);
  if (error || !data) {
    return <Loader />;
  }
  return <Movies films={data} />;
}
