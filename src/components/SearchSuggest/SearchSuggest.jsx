import { Link } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import styles from './SearchSuggest.module.scss';

export function SearchSuggest({ data, setData, error, setQuery }) {
  return (
    <ul className={styles.searchSuggest}>
      {error ? (
        <li className={styles.error}>Error: {error.message}</li>
      ) : data === undefined ? (
        <Loader />
      ) : data.length === 0 ? (
        <li>Ничего не найдено</li>
      ) : (
        data.map(({ nameRu, nameOriginal, kinopoiskId }) => (
          <Link key={kinopoiskId} to={`/movie/${kinopoiskId}`}>
            <li
              onClick={() => {
                setData([]);
                setQuery('');
              }}
            >
              <p>{nameRu ?? nameOriginal}</p>
            </li>
          </Link>
        ))
      )}
    </ul>
  );
}
