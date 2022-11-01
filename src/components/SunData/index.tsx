import React from 'react';

import { formatSunDate } from 'utils/formatSunDate';

type SunDataProps = {
	sunrise: number;
	sunset: number;
};

export const SunData = ({ sunrise, sunset }: SunDataProps) => {
	return (
		<div>
			<p>Sunrise: {formatSunDate(sunrise)}</p>
			<p>Sunset: {formatSunDate(sunset)}</p>
		</div>
	);
};
