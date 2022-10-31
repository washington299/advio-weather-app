import { useMutation } from '@tanstack/react-query';

import { api } from 'services/config';

const getCityWeather = async (city: string, units = 'metric') => {
	const { data } = await api.get(`/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&q=${city}&units=${units}`);

	return data;
};

export const useGetCityWeather = () =>
	useMutation((city: string) => getCityWeather(city));
