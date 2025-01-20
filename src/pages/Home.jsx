import Movies from '../components/Movies/Movies';
import React, { useState } from 'react';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(films);

  React.useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((obj) => {
        setFilms(obj.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  return <Movies films={films} isLoading={isLoading} />;
}
