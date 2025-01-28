import { setLocalStorageFavourite } from '../../utils/LocalStorageUtil';
import { addToFavorites, removeFromFavorites } from './favoriteSlice';

export const favouriteMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === addToFavorites.type ||
    action.type === removeFromFavorites.type
  ) {
    const state = store.getState();
    const updatedHistories = state.favorite.favorites;

    setLocalStorageFavourite(updatedHistories);
  }

  return result;
};
