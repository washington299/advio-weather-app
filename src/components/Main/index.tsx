import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary'

import { SelectCities, TemperatureSwitch, WeatherValue, SunData, ErrorFallback } from 'components';

import { useGetCityWeather } from 'services/queries';

import { convertCelsiusToFahrenheit } from 'utils/convertCelsiusToFahrenheit';

import * as GE from 'styles/globalElements';

const Content = styled.main`
	margin: var(--size-lg) 0;
`;

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: calc(var(--size-xl2) * 3);
`;

const Text = styled.p`
	font-size: var(--size-lg);
	color: var(--white);
`;

const Icon = styled.img`
	margin-top: var(--size-xl2);
`;

export const Main = () => {
	const [isCelsius, setIsCelsius] = useState(true);
	const [city, setCity] = useState('');

	const { data, isFetching, isError } = useGetCityWeather(city);

	const handleSelectChange = (selectedCity: string) => setCity(selectedCity);
	const handleSwitchChange = (value: boolean) => setIsCelsius(!value);

	let content: React.ReactNode;

	if (!isFetching && !data) { content = <Text>No city selected.</Text> }
	if (isFetching) { content = <GE.Spinner role="spinbutton" /> }
	if (isError) { content = <Text>Ops, something went wrong, please try again.</Text> }
	if (data) {
		content = <>
			<WeatherValue
				value={isCelsius ? data.main.temp : convertCelsiusToFahrenheit(data.main.temp)}
				isCelsius={isCelsius}
			/>
			<Icon
				src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
				alt="Weather icon"
			/>
			<SunData sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
		</>
	}

	return (
		<Content>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HeaderWrapper>
					<SelectCities handleSelectChange={handleSelectChange} />
					<TemperatureSwitch disabled={!data} handleSwitchChange={handleSwitchChange} />
				</HeaderWrapper>

				<DataWrapper>
					{content}
				</DataWrapper>
			</ErrorBoundary>
		</Content>
	);
};
