import { memo } from 'react';
import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { NavLink } from 'react-router-dom';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkTheme;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant]
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
