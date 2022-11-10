import React from 'react';
import { render, screen } from '@testing-library/react';

import { ErrorFallback } from '.';

describe('<ErrorFallback />', () => {
	it('should render ErrorFallback with correct text', () => {
		render(<ErrorFallback />);

		expect(screen.getByText(/Ops, Something went wrong, please try again/i)).toBeInTheDocument();
	});
});
