import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || 'dark',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);
  return { theme, setTheme };
}
