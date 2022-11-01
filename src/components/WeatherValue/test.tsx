import React from 'react';
import { screen } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { WeatherValue } from '.';

describe('<WheaterValue />', () => {
	it('Should render WeatherValue with correct value', () => {
		globalRender(<WeatherValue value={20} isCelsius />);

		expect(screen.getByText(/20 °C/i)).toBeInTheDocument();
	});

	it('Should show °F when isCelsius is false', () => {
		globalRender(<WeatherValue value={20} isCelsius={false} />);

		expect(screen.getByText(/20 °F/i)).toBeInTheDocument();
	});
});
