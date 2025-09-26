import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./ArticlesPage')));