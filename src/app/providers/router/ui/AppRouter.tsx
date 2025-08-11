import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return  (<Suspense fallback='<div>loading...</div>'>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => {
            return <Route 
              key={path}
              path={path}
              element={element} />
          })}
        </Routes>
      </Suspense>);
};

export default AppRouter;