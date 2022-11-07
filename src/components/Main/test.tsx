import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { Main } from '.';

const useMutation = jest.spyOn(require('@tanstack/react-query'), 'useMutation');

const mutate = jest.fn();
let isLoading = false;
let data: any;

useMutation.mockImplementation(() => ({
	mutate,
	isLoading,
	data,
}));

describe('<Main />', () => {
	it('should render Main with correct elements', () => {
		globalRender(<Main />);

		expect(screen.getByText(/No city selected/i)).toBeInTheDocument();
		expect(screen.getByRole('combobox')).toBeInTheDocument();
		expect(screen.getByRole('switch')).toBeInTheDocument();
	});

	it('Should dispatch mutate when select options changes', async () => {
		globalRender(<Main />);

		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lisbon' } });

		expect(mutate).toBeCalled();
	});

	it('Should toggle between °C and °F when switch changes', () => {
		globalRender(<Main />);

		expect(screen.getByText(/No city selected/i)).toBeInTheDocument();

		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lisbon' } });

		expect(screen.getByText(/°C/i)).toBeInTheDocument();

		fireEvent.click(screen.getByRole('switch'));

		expect(screen.getByText(/°F/i)).toBeInTheDocument();
	});

	it('Should display correct data when mutation data has a response', async () => {
		data = {
			weather: [{ icon: '50n' }],
			main: { temp: 20 },
			sys: { sunrise: 1667199723, sunset: 1667237886 },
		};

		globalRender(<Main />);

		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lisbon' } });

		expect(screen.getByText('20 °C')).toBeInTheDocument();
		expect(screen.getByText(/sunrise: 04:02/i)).toBeInTheDocument();
		expect(screen.getByText(/sunset: 14:38/i)).toBeInTheDocument();
	});

	it('Should show a spinner when react-query isLoading is true', () => {
		isLoading = true;

		globalRender(<Main />);

		expect(screen.getByRole('spinbutton')).toBeInTheDocument();
	});
});
