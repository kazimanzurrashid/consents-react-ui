import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import Api from './api';
import { consentsLoad } from './features/consent/slice';
import { store } from './store';
import theme from './theme';

import App from './App';

store.dispatch(consentsLoad(Api));

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
