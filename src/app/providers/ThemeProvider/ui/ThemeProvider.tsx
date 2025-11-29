import { useJsonSettings } from 'entities/User';
import { useState, useMemo, ReactNode, useEffect } from 'react';
import { Theme } from 'shared/const/theme';
import { ThemeContext } from 'shared/lib/context/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme = Theme.LIGTH } = useJsonSettings();
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  const [isInited, setIsInited] = useState(false);

  useEffect(() => {
    if (!isInited) {
      setTheme(defaultTheme);
      setIsInited(true);
    }
  }, [defaultTheme, isInited]);

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
