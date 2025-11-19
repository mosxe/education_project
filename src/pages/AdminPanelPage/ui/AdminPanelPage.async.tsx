import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./AdminPanelPage')));