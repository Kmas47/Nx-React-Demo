// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { router } from './navigation/router';

export function App() {
  return (
    <>
      <HelmetProvider>
        <Analytics />
        <SpeedInsights />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
