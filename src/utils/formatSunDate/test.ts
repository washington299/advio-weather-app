import { addZeroToTime, formatSunDate } from '.';

describe('addZeroToTime', () => {
	it('Should return correct time with and zero if is less than 10', () => {
		const response = addZeroToTime(1);

		expect(response).toBe('01');
	});

	it('Should return the same number if is greater than 9', () => {
		const response = addZeroToTime(14);

		expect(response).toBe(14);
	});
});

describe('formatSunDate', () => {
	it('Should return correct time', () => {
		const response = formatSunDate(1667199723);

		expect(response).toBe('04:02');
	});
});
