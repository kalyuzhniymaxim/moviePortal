import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from '../../redux/slices/favoriteSlice';
import styles from './FavoriteButton.module.scss';

export function FavoriteButton({ kinopoiskId }) {
  const { currentUser } = useAuth();
  const userId = currentUser?.email;
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isActive = userId && favorites[userId]?.includes(kinopoiskId);

  const handleClick = useCallback(() => {
    if (isActive) {
      dispatch(removeFromFavorites({ favouriteId: kinopoiskId, userId }));
    } else {
      dispatch(addToFavorites({ favouriteId: kinopoiskId, userId }));
    }
  }, [isActive, dispatch, kinopoiskId, userId]);

  return (
    <button
      className={`${styles.favoriteButton} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <span className={styles.buttonText}>
        {isActive ? 'Удалить из избранного' : 'Добавить в избранное'}
      </span>
    </button>
  );
}
