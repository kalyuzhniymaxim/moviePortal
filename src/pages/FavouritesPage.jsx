import { useSelector } from 'react-redux';

import { Loader } from '../components/Loader/Loader';
import { Movies } from '../components/Movies/Movies';
import useFetchMultiple from '../hooks/useFetchMultiple';
import { selectFavorites } from '../redux/slices/favoriteSlice';

export default function FavouritesPage() {
  const favorites = useSelector(selectFavorites);

  const { data, error, loading } = useFetchMultiple(favorites);

  if (error || !data) {
    return <Loader />;
  }
  return <Movies films={data} isLoading={loading} />;
}
