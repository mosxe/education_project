import { useState, useMemo, FC } from 'react';
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGTH;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;