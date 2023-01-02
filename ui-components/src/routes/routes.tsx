import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { SuspenseLoader } from '../components/loader/default-loader';

const IndexPage = React.lazy(
  () => import('../pages/ui-component/ui-components')
);

const Error = React.lazy(() => import('../pages/error-page/Error'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <SuspenseLoader>
        <IndexPage />
      </SuspenseLoader>
    ),
  },
  {
    path: 'new-page',
    element: (
      <SuspenseLoader>
        <IndexPage />
      </SuspenseLoader>
    ),
  },
  {
    path: '*',
    element: (
      <SuspenseLoader>
        <Error />
      </SuspenseLoader>
    ),
  },
];

export const router = createBrowserRouter(routes, {
  basename: '/calculator/',
});
