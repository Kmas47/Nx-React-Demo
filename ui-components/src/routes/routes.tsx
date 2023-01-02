import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const IndexPage = React.lazy(
  () => import('../pages/ui-component/ui-components')
);

const Error = React.lazy(() => import('../pages/error-page/Error'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: 'new-page',
    element: <IndexPage />,
  },
  {
    path: '*',
    element: <Error />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: '/calculator/',
});
