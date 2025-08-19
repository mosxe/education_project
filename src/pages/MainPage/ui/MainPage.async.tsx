import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./MainPage')));