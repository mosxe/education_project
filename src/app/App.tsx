import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited } from 'entities/User';
import { initAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from 'widgets/PageLoader';
import { MainLayout } from 'shared/layouts/MainLayout';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <div id='app' className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <MainLayout
          header={<Navbar />}
          content={<AppRouter />}
          sidebar={<SideBar />}
        />
      </Suspense>
    </div>
  );
};

export default App;
