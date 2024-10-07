import { UiRoutes } from '@nx-react/ui-components';
import { createBrowserRouter } from 'react-router-dom';

const appRoutes = [...UiRoutes];

export const router = createBrowserRouter(appRoutes, {
  basename: '',
});
