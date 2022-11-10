import { convertCelsiusToFahrenheit } from '.';

describe('convertCelsiusToFahrenheit', () => {
	it('Should convert celsius to fahrenheit correctly', () => {
		const response = convertCelsiusToFahrenheit(14.2);

		expect(response).toBe(57.56);
	});
});
