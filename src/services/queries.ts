import { useQuery } from '@tanstack/react-query';

import { api } from 'services/config';

const getCityWeather = async (city: string) => {
	const { data } = await api.get(`/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&q=${city}`);

	return data;
};

export const useGetCityWeather = (city: string) =>
	useQuery(['city', city], () => getCityWeather(city));
