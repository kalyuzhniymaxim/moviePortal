import React from 'react';
import styles from './Search.module.scss';

export default function Search() {
  const [searchValue, setSearchValue] = React.useState('');

  // console.log(searchValue);

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.searchText}
        type="text"
        placeholder="What do you want to watch?"
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.searchRemove}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.21,11.79a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.41l-1.79,1.8a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.59,12l-1.8-1.79a1,1,0,0,1,1.42-1.42L12,10.59l1.79-1.8a1,1,0,0,1,1.42,1.42L13.41,12Z" />
        </svg>
      )}
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}
