import { Routes, Route } from 'react-router-dom';
import { Suspense, memo, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    }
    );
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className='page-wrapper'>
        <Routes>
          {routes.map(({ element, path }) => {
            return <Route
              key={path}
              path={path}
              element={element} />;
          })}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);