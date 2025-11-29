import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGTH;
        break;
      case Theme.LIGTH:
        newTheme = Theme.PURPLE;
        break;
      case Theme.PURPLE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGTH;
    }

    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };

  return {
    theme: theme || Theme.LIGTH,
    toggleTheme
  };
};
