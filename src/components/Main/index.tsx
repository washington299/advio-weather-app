import React from 'react';

import { SelectCities } from 'components/SelectCities';
import { TemperatureSwitch } from 'components/TemperatureSwitch';

import * as S from './styles';

export const Main = () => {
	return (
		<S.Content>
			<S.Wrapper>
				<SelectCities handleSelectChange={() => {}} />
				<TemperatureSwitch handleSwitchChange={() => {}} />
			</S.Wrapper>
		</S.Content>
	);
};
