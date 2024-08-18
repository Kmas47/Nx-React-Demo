// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import { router } from '@nx-react/ui-components';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
