import { createContext, useMemo, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme();

  const ThemeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
