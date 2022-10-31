import React, { useState } from 'react';

import { SelectCities } from 'components/SelectCities';
import { TemperatureSwitch } from 'components/TemperatureSwitch';

import { useGetCityWeather } from 'services/queries';

import * as S from './styles';

export const Main = () => {
	const mutation = useGetCityWeather();

	const handleSelectChange = (selectedCity: string) => {
		mutation.mutate(selectedCity);
	};

	return (
		<S.Content>
			<S.Wrapper>
				<SelectCities handleSelectChange={handleSelectChange} />
				<TemperatureSwitch disabled={!mutation?.data} handleSwitchChange={() => {}} />
			</S.Wrapper>

			{mutation.isLoading && <div>Loading...</div>}
		</S.Content>
	);
};
