import { formatSunDate } from '.';

describe('formatSunDate', () => {
	it('Should return correct time', () => {
		const response = formatSunDate(1667199723);

		expect(response).toBe('04:02');
	});
});
