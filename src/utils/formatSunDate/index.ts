export const formatSunDate = (value: number) => {
	return new Intl.DateTimeFormat(
		'pt-PT',
		{ hour: 'numeric', minute: 'numeric'}
	).format(value * 1000);
};
