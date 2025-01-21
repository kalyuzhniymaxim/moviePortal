import { lazy } from 'react';

export const lazyLoadedComponents = {
  Home: lazy(() => import('../pages/Home')),
  SearchMovies: lazy(() => import('../pages/SearchMovies')),
  Authorisation: lazy(() => import('../pages/Authorisation')),
  MovieInformation: lazy(() => import('../pages/MovieInformation')),
};
