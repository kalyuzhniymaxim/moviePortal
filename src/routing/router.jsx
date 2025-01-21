import { createBrowserRouter } from 'react-router-dom';
import Authorisation from '../pages/Authorisation';
import Home from '../pages/Home';
import MovieInformation from '../pages/MovieInformation';
import NotFound from '../pages/NotFound';
import { PageRootLayout } from '../pages/PageRootLayout';

import SearchMovies from '../pages/SearchMovies';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search',
        element: <SearchMovies />,
      },
      { path: '/signin', element: <Authorisation /> },
      { path: '/movie/:id', element: <MovieInformation /> },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
