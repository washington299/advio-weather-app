import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
	padding: var(--size-sm);

	border: none;
	box-shadow: 1px 1px 4px black;
`;

const Option = styled.option``;

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
		<Select defaultValue="none" onChange={(e) => handleSelectChange(e.target.value)}>
			<Option value="none" disabled hidden>Select a city</Option>
			{citiesOptions.map(({ label, value }) => (
				<Option key={value} value={value}>{label}</Option>
			))}
		</Select>
	);
};
