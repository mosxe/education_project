import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { AppRoutes } from 'shared/const/router';

export const useRouteChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRoutes).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
