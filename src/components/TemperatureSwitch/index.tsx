import React, { useState } from 'react';
import WrongSwitch from "react-switch";

import * as S from './styles';

// apparently TS has an issue with the return type of Switch so in this case i had to use any to avoid ts error
const Switch = WrongSwitch as any;

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
		<S.Label htmlFor='switch'>
			<S.Text>°C</S.Text>
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
			<S.Text>°F</S.Text>
		</S.Label>
	);
};
