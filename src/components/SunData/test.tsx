import React from 'react';
import { render, screen } from '@testing-library/react';

import { SunData } from '.';

describe('<SunData />', () => {
	it('Should renders sunrise and sunset with correct values', () => {
		render(<SunData sunrise={1667199723} sunset={1667237886} />);

		expect(screen.getByText(/sunrise: 04:02/i)).toBeInTheDocument();
		expect(screen.getByText(/sunset: 14:38/i)).toBeInTheDocument();
	});
});
