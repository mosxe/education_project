import { classNames } from 'shared/lib';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited } from 'entities/User';
import { initAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLoaderLayout } from 'shared/layouts/AppLoaderLayout';
import { MainLayout } from 'shared/layouts/MainLayout';
import { useAppToolbar } from 'app/lib/useAppToolbar';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();
  console.log(toolbar);
  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return (
      <div id='app' className={classNames('app', {}, [])}>
        <AppLoaderLayout />
      </div>
    );
  }

  return (
    <div id='app' className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <MainLayout
          header={<Navbar />}
          content={<AppRouter />}
          sidebar={<SideBar />}
          toolbar={toolbar}
        />
      </Suspense>
    </div>
  );
};

export default App;
