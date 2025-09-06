import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise(resolve => {
  setTimeout(resolve, Math.random() * 1000);
}).then(() => import('./LoginForm')));