import { configureStore } from '@reduxjs/toolkit';

import { kinopoiskApi } from '../api/kinopoiskApi';
import authReducer from './slices/authSlice';
import favoriteReducer from './slices/favoriteSlice';
import { favouriteMiddleware } from './slices/favouriteMiddleware';
import { historyMiddleware } from './slices/historyMiddleware';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(kinopoiskApi.middleware)
      .concat(favouriteMiddleware),
});
