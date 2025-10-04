import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1500);
}).then(() => import('./AddCommentForm')));