import React from 'react';

import * as S from './styles';

type WeatherValueProps = {
	value: number;
	isCelsius: boolean;
}

export const WeatherValue = ({ value, isCelsius }: WeatherValueProps) => {
	return (
		<S.WeatherNumber>
			{Math.floor(value)} {isCelsius ? '°C' : '°F'}
		</S.WeatherNumber>
	);
};
