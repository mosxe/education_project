import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./ProfilePage')));