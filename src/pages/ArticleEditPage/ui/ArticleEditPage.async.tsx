import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./ArticleEditPage')));