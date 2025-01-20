import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

import SearchSuggest from '../SearchSuggest/SearchSuggest';
import styles from './Search.module.scss';
import Loader from '../Loader/Loader';

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  console.log(suggestions);
  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setNotFound(false);
  };

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      setIsLoading(true);
      setNotFound(false);
      const apiKey = import.meta.env.VITE_API_KEY;
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${debouncedQuery}`,
        {
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.items.length === 0) {
            setNotFound(true);
          }
          setSuggestions(data.items);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      setSuggestions([]);
      setNotFound(false);
    }
  }, [debouncedQuery]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setSuggestions([]);
    setNotFound(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Проверяем, что загрузка завершена, есть предложения и ничего не найдено
    if (!isLoading && suggestions.length > 0 && !notFound) {
      navigate(`/search?keyword=${query}`);
      setSuggestions([]);
    }
  };
  return (
    <>
      <form onSubmit={handleSearch} className={styles.search}>
        <input
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          className={styles.searchText}
          type="text"
          placeholder="What do you want to watch?"
        />
        {query && (
          <svg
            onClick={clearSearch}
            className={styles.searchRemove}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Clear</title>
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" />
          </svg>
        )}
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
        {isLoading && <Loader />}
        {notFound && !isLoading && (
          <div style={{ color: 'white' }}>Ничего не найдено</div>
        )}
        {query && (
          <SearchSuggest
            suggestions={suggestions}
            setSuggestions={setSuggestions}
          />
        )}
      </form>
    </>
  );
}
