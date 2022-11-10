import React from 'react';
import styled from 'styled-components';

import { formatTemperatureUnit } from 'utils/formatTemperatureUnit';

const WeatherNumber = styled.span`
	font-size: calc(var(--size-xl) * 2);
	font-weight: bold;
	color: var(--white);
`;

type WeatherValueProps = {
	value: number;
	isCelsius: boolean;
};

export const WeatherValue = ({ value, isCelsius }: WeatherValueProps) => {
	return (
		<WeatherNumber>
			{formatTemperatureUnit(value, isCelsius)}
		</WeatherNumber>
	);
};
