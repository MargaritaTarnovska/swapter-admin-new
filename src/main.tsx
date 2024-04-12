import React from 'react';

import '@styles/index.css';
import { BaseLayout } from '@layouts/base.layout.tsx';
import { queryClient } from '@queries/queryClient.ts';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';

dayjs.extend(duration);
dayjs.extend(utc);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <BaseLayout>
          <App />
        </BaseLayout>
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
