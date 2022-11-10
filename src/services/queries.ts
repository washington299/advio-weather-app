import { useMutation } from '@tanstack/react-query';

import { baseURL } from 'services/config';

import { CityWeatherTypes } from 'types/apiData';

const getCityWeather = async (city: string, units = 'metric'): Promise<CityWeatherTypes> => {
	const response = await fetch(
		`${baseURL}/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&q=${city}&units=${units}`,
		{ method: 'GET' }
	);

	return response.json();
};

type PayloadTypes = {
	city: string;
	isCelsius?: boolean;
};

export const useGetCityWeather = () =>
	useMutation((payload: PayloadTypes) => getCityWeather(payload.city, payload.isCelsius ? 'metric': 'imperial'));
