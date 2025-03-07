import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary';
import { NotFound } from '../pages/NotFound';
import { PageRootLayout } from '../pages/PageRootLayout';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { lazyLoadedComponents } from './lazyRoutes';

const {
  Home,
  SearchMovies,
  Authorisation,
  MovieInformation,
  FavouritesPage,
  
} = lazyLoadedComponents;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <SearchMovies />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: '/registration',
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <Authorisation />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: '/movie/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <ErrorBoundary>
              <MovieInformation />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      {
        path: '/favourites',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}>
              <ErrorBoundary>
                <FavouritesPage />
              </ErrorBoundary>
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: (
          <ErrorBoundary>
            <NotFound />,
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
