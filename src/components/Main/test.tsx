import React from 'react';
import { screen, fireEvent } from '@testing-library/react';

import { globalRender } from 'tests/helpers';

import { Main } from '.';

const useGetCityWeather = jest.spyOn(require('services/queries'), 'useGetCityWeather');
const mutate = jest.fn();

useGetCityWeather.mockImplementation(() => ({
	mutate,
}));

jest.mock("components/WeatherValue", () => {
	return {
		__esModule: true,
		WeatherValue: function Mock() {
			return <div data-testid="Mock Weathervalue"></div>;
		},
	};
});

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

	it('Should display correct data when mutation data has a response', () => {
		useGetCityWeather.mockImplementation(() => ({
			data: { weather: [{ icon: '' }], main: { temp: 20 } },
		}));

		globalRender(<Main />);

		expect(screen.getByTestId('Mock Weathervalue')).toBeInTheDocument();
	});

	it('Should show a spinner when react-query isLoading is true', () => {
		const isLoading = jest.fn();
		useGetCityWeather.mockImplementation(() => ({
			isLoading,
		}));

		globalRender(<Main />);

		isLoading.mockImplementation(() => true);

		expect(screen.getByRole('spinbutton')).toBeInTheDocument();
	});
});
