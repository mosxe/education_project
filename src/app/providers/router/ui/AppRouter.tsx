import { Routes, Route } from 'react-router-dom';
import { Suspense, memo, useCallback } from 'react';
import { AppRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';


const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    return <Route
      key={route.path}
      path={route.path}
      element={route.authOnly ? <RequireAuth><>{route.element}</></RequireAuth> : route.element} />;

  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);