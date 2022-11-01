export const addZeroToTime = (time: number): number | string => {
	return time < 10 ? `0${time}` : time;
};

export const formatSunDate = (value: number) => {
	const hours = new Date(value * 1000).getHours();
	const minutes = new Date(value * 1000).getMinutes();

	return `${addZeroToTime(hours)}:${addZeroToTime(minutes)}`;
};
