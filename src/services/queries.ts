import { useQuery } from '@tanstack/react-query';

import { baseURL } from 'services/config';

import { CityWeatherTypes } from 'types/apiData';

const getCityWeather = async (city: string): Promise<CityWeatherTypes> => {
	const response = await fetch(
		`${baseURL}/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&q=${city}&units=metric`,
		{ method: 'GET' }
	);

	return response.json();
};

export const useGetCityWeather = (city: string) =>
	useQuery(['city', city], () => getCityWeather(city), { enabled: !!city });
