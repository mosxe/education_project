import { memo, useCallback } from 'react';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from 'entities/User';
import { Icon } from 'shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Icon
      Svg={ThemeIcon}
      width={40}
      height={40}
      clickable
      onClick={onToggleHandler}
      className={className}
    />
  );
});
