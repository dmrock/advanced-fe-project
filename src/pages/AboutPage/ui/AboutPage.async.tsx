import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // temporary solution to show lazy loading in action
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
