import { useJsonSettings } from 'entities/User';
import { useState, useMemo, ReactNode, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage';
import { Theme } from 'shared/const/theme';
import { ThemeContext } from 'shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGTH
  );
  const [isInited, setIsInited] = useState(false);

  useEffect(() => {
    if (!isInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsInited(true);
    }
  }, [defaultTheme, isInited]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme
    }),
    [theme]
  );

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
