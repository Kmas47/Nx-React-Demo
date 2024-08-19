import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SpeedInsights } from '@vercel/speed-insights/react';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>
);
