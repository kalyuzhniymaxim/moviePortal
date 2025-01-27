import { createSlice } from '@reduxjs/toolkit';

import {
  getLocalStorageFavourite,
  setLocalStorageFavourite,
} from '../../utils/LocalStorageUtil';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: getLocalStorageFavourite(),
  },
  reducers: {
    addToFavorites: (state, action) => {
      const { userId, favouriteId } = action.payload;
      if (!state.favorites[userId]) {
        state.favorites[userId] = [];
      }
      state.favorites[userId].push(favouriteId);
      setLocalStorageFavourite(state.favorites);
    },
    removeFromFavorites: (state, action) => {
      const { userId, favouriteId } = action.payload;
      if (state.favorites[userId]) {
        state.favorites[userId] = state.favorites[userId].filter(
          (id) => id !== favouriteId,
        );
      }
      setLocalStorageFavourite(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
