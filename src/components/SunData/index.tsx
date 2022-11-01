import React from 'react';

import { formatSunDate } from 'utils/formatSunDate';

import * as S from './styles';

type SunDataProps = {
	sunrise: number;
	sunset: number;
};

export const SunData = ({ sunrise, sunset }: SunDataProps) => {
	return (
		<S.Content>
			<p>Sunrise: {formatSunDate(sunrise)}</p>
			<p>Sunset: {formatSunDate(sunset)}</p>
		</S.Content>
	);
};
