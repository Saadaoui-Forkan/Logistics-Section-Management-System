import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cache: 300000,
      staleTime: 20 * 1000,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client = {queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
