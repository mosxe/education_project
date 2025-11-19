import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  let auth = useSelector(getUserAuthData);
  let location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((hasRequiredRole) => {
      const hasRole = userRoles?.includes(hasRequiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
};