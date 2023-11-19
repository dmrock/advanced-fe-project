import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // temporary solution to show lazy loading in action
      setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
