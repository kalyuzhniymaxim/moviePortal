import { Link } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import styles from './SearchSuggest.module.scss';

export default function SearchSuggest({ suggestions, setSuggestions }) {
  return (
    <ul className={styles.searchSuggest}>
      {suggestions.map(({ nameRu, nameOriginal, kinopoiskId }) => (
        <Link key={kinopoiskId} to={`/movie/${kinopoiskId}`}>
          <li key={kinopoiskId} onClick={() => setSuggestions([])}>
            <p>{nameRu ?? nameOriginal}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}