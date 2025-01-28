import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import styles from './SearchSuggest.module.scss';

export function SearchSuggest({ data, setData, error, setQuery, setIsOpen }) {
  const suggestionRef = useRef(null);
  const navigate = useNavigate();

  const handleSuggestionClick = useCallback(
    (kinopoiskId) => {
      navigate(`/movie/${kinopoiskId}`);
      setIsOpen(false);
    },
    [navigate, setIsOpen],
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <ul className={styles.searchSuggest} ref={suggestionRef}>
      {error ? (
        <li className={styles.error}>Error: {error.message}</li>
      ) : data === undefined ? (
        <Loader />
      ) : data.length === 0 ? (
        <li>Ничего не найдено</li>
      ) : (
        data.map(({ nameRu, nameOriginal, kinopoiskId }) => (
          <li
            key={kinopoiskId}
            onClick={() => {
              setData([]);
              setQuery('');
              handleSuggestionClick(kinopoiskId);
            }}
          >
            <p>{nameRu ?? nameOriginal}</p>
          </li>
        ))
      )}
    </ul>
  );
}
