import { formatTemperatureUnit } from './index';

describe('formatTemperatureUnit', () => {
	it('Should return temperature with celsius unit when isCelsius param is true', () => {
		const value = 15.7;
		const isCelsius = true;

		const response = formatTemperatureUnit(value, isCelsius);

		expect(response).toBe('15 °C');
	});

	it('Should return temperature with fahrenheit unit when isCelsius param is false', () => {
		const value = 15.2;
		const isCelsius = false;

		const response = formatTemperatureUnit(value, isCelsius);

		expect(response).toBe('15 °F');
	});
});
