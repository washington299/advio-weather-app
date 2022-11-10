import React from 'react';
import styled from 'styled-components';

import { formatSunDate } from 'utils/formatSunDate';

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;

	margin-top: calc(var(--size-xl2) * 2);
	color: var(--white);
`;

type SunDataProps = {
	sunrise: number;
	sunset: number;
};

export const SunData = ({ sunrise, sunset }: SunDataProps) => {
	return (
		<Content>
			<p>Sunrise: {formatSunDate(sunrise)}</p>
			<p>Sunset: {formatSunDate(sunset)}</p>
		</Content>
	);
};
