import React from 'react';
import { RouteObject } from 'react-router-dom';
import { SuspenseLoader } from '../components/loader/default-loader';
import { UIRoutes } from './routes.constants';

const IndexPage = React.lazy(
  () => import('../pages/ui-component/ui-components')
);

const Error = React.lazy(() => import('../pages/error-page/Error'));

const MemoryGame = React.lazy(() => import('../pages/memory-game/memory-game'));

export const UiRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <SuspenseLoader>
        <IndexPage />
      </SuspenseLoader>
    ),
  },
  {
    path: UIRoutes.DASHBOARD,
    element: (
      <SuspenseLoader>
        <IndexPage />
      </SuspenseLoader>
    ),
  },
  {
    path: UIRoutes.MEMORY_GAME,
    element: (
      <SuspenseLoader>
        <MemoryGame />
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

export default UiRoutes;
