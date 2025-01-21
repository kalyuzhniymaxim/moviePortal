import { Link } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import styles from './SearchSuggest.module.scss';

export function SearchSuggest({ data, setData, error, setQuery }) {
  return (
    <ul className={styles.searchSuggest}>
      {error || data === undefined ? (
        <Loader />
      ) : (
        data.map(({ nameRu, nameOriginal, kinopoiskId }) => (
          <Link key={kinopoiskId} to={`/movie/${kinopoiskId}`}>
            <li
              key={kinopoiskId}
              onClick={() => {
                setData((data.items = []));
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
