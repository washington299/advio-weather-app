import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
	it('should render header with correct text', () => {
		render(<Header />);

		expect(screen.getByText(/Weather app/i)).toBeInTheDocument();
	});
});
