import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className='page-wrapper'>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => {
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

export default AppRouter;