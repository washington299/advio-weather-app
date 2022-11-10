import { useMutation } from '@tanstack/react-query';

import { api } from 'services/config';

import { CityWeatherTypes } from 'types/apiData';

const getCityWeather = async (city: string, units = 'metric'): Promise<CityWeatherTypes> => {
	const { data } = await api.get(`/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&q=${city}&units=${units}`);

	return data;
};

type PayloadTypes = {
	city: string;
	isCelsius?: boolean;
};

export const useGetCityWeather = () =>
	useMutation((payload: PayloadTypes) => getCityWeather(payload.city, payload.isCelsius ? 'metric': 'imperial'));
