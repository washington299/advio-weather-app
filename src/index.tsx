import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';

import GlobalStyles from 'styles/global';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<App />
		</QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

