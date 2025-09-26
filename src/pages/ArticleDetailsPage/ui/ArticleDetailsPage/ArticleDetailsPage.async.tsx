import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./ArticleDetailsPage')));