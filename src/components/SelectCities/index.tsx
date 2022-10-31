import React from 'react';

import * as S from './styles';

const citiesOptions = [
	{ label: 'London', value: 'london' },
	{ label: 'New york', value: 'new york' },
	{ label: 'Lisbon', value: 'lisbon' },
];

type SelectCitiesProps = {
	handleSelectChange: (value: string) => void;
};

export const SelectCities = ({ handleSelectChange }: SelectCitiesProps) => {
	return (
		<S.Select defaultValue="none" onChange={(e) => handleSelectChange(e.target.value)}>
			<S.Option value="none" disabled hidden>Select a city</S.Option>
			{citiesOptions.map(({ label, value }) => (
				<S.Option key={value} value={value}>{label}</S.Option>
			))}
		</S.Select>
	);
};
