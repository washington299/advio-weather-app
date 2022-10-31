import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const globalRender = (children: React.ReactNode): RenderResult =>
	render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)
