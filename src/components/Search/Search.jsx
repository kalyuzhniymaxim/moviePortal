import React, { useState, useEffect } from 'react';

import SearchSuggest from '../SearchSuggest/SearchSuggest';
import styles from './Search.module.scss';

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions);

  const openSearchSuggest = query && (
    <SearchSuggest suggestions={suggestions} />
  );

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
  };

  const openQueryIcon = query && (
    <svg
      onClick={clearSearch}
      className={styles.searchRemove}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" />
    </svg>
  );

  useEffect(() => {
    if (query.length > 2) {
      const apiKey = import.meta.env.VITE_API_KEY;
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${query}`,
        {
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setSuggestions(data.items))
        .catch((err) => console.log(err));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          value={query}
          onChange={handleInputChange}
          className={styles.searchText}
          type="text"
          placeholder="What do you want to watch?"
        />
        {openQueryIcon}
        <button className={styles.searchBtn}>Search</button>
        {openSearchSuggest}
      </div>
    </>
  );
}
