import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectCities, TemperatureSwitch, WeatherValue, SunData } from 'components';

import { useGetCityWeather } from 'services/queries';

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

const DefaultText = styled.p`
	font-size: var(--size-lg);
	color: var(--white);
`;

const Icon = styled.img`
	margin-top: var(--size-xl2);
`;

export const Main = () => {
	const [isCelsius, setIsCelsius] = useState(true);
	const [city, setCity] = useState('');

	const mutation = useGetCityWeather();

	const handleSelectChange = (selectedCity: string) => {
		const payload = { city: selectedCity, isCelsius };
		mutation.mutate(payload);

		setCity(selectedCity);
	};

	const handleSwitchChange = (value: boolean) => {
		const payload = { city, isCelsius: !value };
		mutation.mutate(payload)

		setIsCelsius(!value);
	};

	return (
		<Content>
			<HeaderWrapper>
				<SelectCities handleSelectChange={handleSelectChange} />
				<TemperatureSwitch disabled={!mutation?.data} handleSwitchChange={handleSwitchChange} />
			</HeaderWrapper>

			<DataWrapper>
				{mutation.isLoading ? <GE.Spinner role="spinbutton" /> : (
					<>
						{!!mutation?.data ? (
							<>
								<WeatherValue value={mutation.data?.main?.temp} isCelsius={isCelsius} />
								<Icon
									src={`http://openweathermap.org/img/wn/${mutation.data?.weather[0]?.icon}@2x.png`}
									alt="Weather icon"
								/>
								<SunData sunrise={mutation.data?.sys?.sunrise} sunset={mutation.data?.sys?.sunset} />
							</>
						) : (
							<DefaultText>No city selected.</DefaultText>
						)}
					</>
				)}
			</DataWrapper>
		</Content>
	);
};
