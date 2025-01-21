import { useEffect, useState } from 'react';

export const getApiUrl = (url) => {
  return `https://kinopoiskapiunofficial.tech/api/v2.2${url}`;
};

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      setLoading(true);

      fetch(url, {
        ...options,
        method: 'GET',
        headers: {
          'X-API-KEY': import.meta.env.VITE_API_KEY,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url]);

  return { data, loading, error, setData };
}
