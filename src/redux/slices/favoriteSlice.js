import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const item = action.payload;
      state.favorites.push(item);
    },
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favorites = state.favorites.filter((item) => item !== itemId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite.favorites;

export default favoriteSlice.reducer;
