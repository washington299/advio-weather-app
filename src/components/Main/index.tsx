import React, { useState } from 'react';

import { SelectCities } from 'components/SelectCities';
import { TemperatureSwitch } from 'components/TemperatureSwitch';

import { useGetCityWeather } from 'services/queries';

import * as S from './styles';
import * as GE from 'styles/globalElements';

export const Main = () => {
	const [isCelsius, setIsCelsius] = useState(true);

	const mutation = useGetCityWeather();

	const handleSelectChange = (selectedCity: string) => {
		mutation.mutate(selectedCity);
	};

	return (
		<S.Content>
			<S.HeaderWrapper>
				<SelectCities handleSelectChange={handleSelectChange} />
				<TemperatureSwitch disabled={!mutation?.data} handleSwitchChange={() => {}} />
			</S.HeaderWrapper>

			<S.DataWrapper>
				{mutation.isLoading ? <GE.Spinner role="spinbutton" /> : (
					<>
						{!!mutation?.data ? (
							<S.WeatherNumber>
								{Math.floor(mutation.data?.main?.temp)} {isCelsius ? '°C' : '°F'}
							</S.WeatherNumber>
						) : (
							<S.DefaultText>No city selected.</S.DefaultText>
						)}
					</>
				)}
			</S.DataWrapper>
		</S.Content>
	);
};
