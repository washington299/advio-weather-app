import React, { useState } from 'react';
import styled from 'styled-components';

import WrongSwitch from "react-switch";

// apparently TS has an issue with the return type of Switch so in this case i had to use any to avoid ts error
const Switch = WrongSwitch as any;

const Label = styled.label`
	display: flex;
	align-items: center;

	.switch {
		margin: 0 var(--size-xs);
	}
`;

const Text = styled.span`
	color: var(--white);
`;

type TemperatureSwitchProps = {
	disabled: boolean;
	handleSwitchChange: (value: boolean) => void;
};

export const TemperatureSwitch = ({ disabled, handleSwitchChange }: TemperatureSwitchProps) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (nextChecked: boolean) => {
		setChecked(nextChecked);
		handleSwitchChange(nextChecked);
	};

	return (
		<Label htmlFor='switch'>
			<Text>°C</Text>
			<Switch
				id='switch'
				className="switch"
				disabled={disabled}
				checked={checked}
				onChange={handleChange}
				offColor="#4A5568"
				onColor="#4A5568"
				offHandleColor="#DD6B20"
				onHandleColor="#DD6B20"
				handleDiameter={22}
				uncheckedIcon={false}
				checkedIcon={false}
				width={40}
				height={15}
			/>
			<Text>°F</Text>
		</Label>
	);
};
