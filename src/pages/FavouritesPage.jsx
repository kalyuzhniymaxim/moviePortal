import { useSelector } from 'react-redux';

import { FavouritesItem } from '../components/FavouritesItem/FavouritesItem';
import useAuth from '../hooks/useAuth';
import { selectFavorites } from '../redux/slices/favoriteSlice';

export default function FavouritesPage() {
  const favorites = useSelector(selectFavorites);
  const { currentUser } = useAuth();

  if (!favorites[currentUser.email]?.length) {
    return <div>No Favourites </div>;
  }

  return (
    <>
      <FavouritesItem id={favorites[currentUser.email]} />
    </>
  );
}
