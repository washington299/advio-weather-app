import React from 'react';

import { formatTemperatureUnit } from 'utils/formatTemperatureUnit';

import * as S from './styles';

type WeatherValueProps = {
	value: number;
	isCelsius: boolean;
}

export const WeatherValue = ({ value, isCelsius }: WeatherValueProps) => {
	return (
		<S.WeatherNumber>
			{formatTemperatureUnit(value, isCelsius)}
		</S.WeatherNumber>
	);
};
