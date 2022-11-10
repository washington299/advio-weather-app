export const formatTemperatureUnit = (value: number, isCelsius: boolean) => {
	return new Intl.NumberFormat('pt-PT', {
		style: 'unit',
		unit: isCelsius ? 'celsius' : 'fahrenheit',
	}).format(value);
};
