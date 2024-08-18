// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { router } from '@nx-react/ui-components';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';

export function App() {
  return (
    <>
      <HelmetProvider>
        <Analytics />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
