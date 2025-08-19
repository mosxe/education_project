import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./AboutPage')));