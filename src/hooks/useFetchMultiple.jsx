import { useEffect, useState } from 'react';

export default function useFetchMultiple(values, options = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = () => {
      const promises = values.map((value) => {
        return fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${value}`,
          {
            ...options,
            method: 'GET',
            headers: {
              'X-API-KEY': import.meta.env.VITE_API_KEY,
              'Content-Type': 'application/json',
            },
          },
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch data for ${value}`);
            }
            return response.json();
          })
          .catch((error) => {
            throw new Error(
              `Failed to fetch data for ${value}: ${error.message}`,
            );
          });
      });

      Promise.all(promises)
        .then((results) => {
          setData(results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    };
    fetchData();
  }, [values]);

  return { data, loading, error };
}
