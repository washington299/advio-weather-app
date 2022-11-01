import React, { useState } from 'react';

import { SelectCities } from 'components/SelectCities';
import { TemperatureSwitch } from 'components/TemperatureSwitch';
import { WeatherValue } from 'components/WeatherValue';
import { SunData } from 'components/SunData';

import { useGetCityWeather } from 'services/queries';

import * as S from './styles';
import * as GE from 'styles/globalElements';

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

	console.log(isCelsius)
	return (
		<S.Content>
			<S.HeaderWrapper>
				<SelectCities handleSelectChange={handleSelectChange} />
				<TemperatureSwitch disabled={!mutation?.data} handleSwitchChange={handleSwitchChange} />
			</S.HeaderWrapper>

			<S.DataWrapper>
				{mutation.isLoading ? <GE.Spinner role="spinbutton" /> : (
					<>
						{!!mutation?.data ? (
							<>
								<WeatherValue value={mutation.data?.main?.temp} isCelsius={isCelsius} />
								<S.Icon
									src={`http://openweathermap.org/img/wn/${mutation.data?.weather[0]?.icon}@2x.png`}
									alt="Weather icon"
								/>
								<SunData sunrise={mutation.data?.sys?.sunrise} sunset={mutation.data?.sys?.sunset} />
							</>
						) : (
							<S.DefaultText>No city selected.</S.DefaultText>
						)}
					</>
				)}
			</S.DataWrapper>
		</S.Content>
	);
};
