import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useDebounce } from '../../hooks/useDebounce';
import { getApiUrl, useFetch } from '../../hooks/useFetch';
import { PageButton } from '../PageButton/PageButton';
import { SearchSuggest } from '../SearchSuggest/SearchSuggest';
import styles from './Search.module.scss';

export function Search() {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const debouncedQuery = useDebounce(query, 500);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data, setData, loading, error } = useFetch(
    debouncedQuery.length > 2
      ? getApiUrl(`/films?keyword=${debouncedQuery}`)
      : null,
  );

  const clearSearch = () => {
    setQuery('');
    setData((data.items = []));
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setData([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (debouncedQuery.length > 2 && !loading && data.items.length > 0) {
      navigate(`/search?keyword=${query}`);
      setIsOpen(false);
    }
  };
  const handleFormClick = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    setQuery(keyword);
  }, [keyword, searchParams]);

  return (
    <form onSubmit={handleSearch} className={styles.search}>
      <input
        value={query}
        onChange={handleInputChange}
        className={styles.searchText}
        type="text"
        onClick={handleFormClick}
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
      <PageButton text={'Search'} />
      {query.length === 0 ||
        (isOpen && (
          <SearchSuggest
            setIsOpen={setIsOpen}
            data={data?.items}
            setData={setData}
            error={error}
            setQuery={setQuery}
          />
        ))}
    </form>
  );
}
