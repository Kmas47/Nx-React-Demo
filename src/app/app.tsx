// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './navigation/router';
import React, { Suspense } from 'react';

const Analytics = React.lazy(() =>
  import('@vercel/analytics/react').then((mod) => ({ default: mod.Analytics }))
);

const SpeedInsights = React.lazy(() =>
  import('@vercel/speed-insights/react').then((mod) => ({
    default: mod.SpeedInsights,
  }))
);

export function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
