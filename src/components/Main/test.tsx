import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { Main } from '.';

const useGetCityWeather = jest.spyOn(require('services/queries'), 'useGetCityWeather');
const mutate = jest.fn();

useGetCityWeather.mockImplementation(() => ({
	mutate,
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

	it('Should show a spinner when react-query isLoading is true', () => {
		const isLoading = jest.fn();
		useGetCityWeather.mockImplementation(() => ({
			isLoading,
		}));

		globalRender(<Main />);

		isLoading.mockImplementationOnce(() => true);

		expect(screen.getByRole('spinbutton')).toBeInTheDocument();
	});
});
