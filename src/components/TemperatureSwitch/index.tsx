import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Content = styled.div`
	display: flex;
	align-items: center;
`;

const Label = styled.label`
	color: var(--white);
	margin: 0 var(--size-sm);
`;

const SwitchLabel = styled.label<{ isDisabled: boolean }>`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 15px;

	${({ isDisabled }) => css`
		opacity: ${isDisabled ? 0.6 : 1};
	`}

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--dark-gray);
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 22px;
		width: 22px;
		left: -4px;
		bottom: -3px;
		background-color: var(--white);
		-webkit-transition: .4s;
		transition: .4s;
		background-color: var(--orange);
	}

	input:checked + .slider {
		background-color: var(--dark-gray);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--orange);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;

type TemperatureSwitchProps = {
	disabled: boolean;
	handleSwitchChange: (value: boolean) => void;
};

export const TemperatureSwitch = ({ disabled, handleSwitchChange }: TemperatureSwitchProps) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nextChecked = e.target.checked;

		setChecked(nextChecked);
		handleSwitchChange(nextChecked);
	};

	return (
		<Content>
			<Label htmlFor="toggle">°C</Label>

			<SwitchLabel className="switch" isDisabled={disabled}>
				<input
					id="toggle"
					type="checkbox"
					role="switch"
					disabled={disabled}
					checked={checked}
					onChange={handleChange}
				/>
				<span className="slider round"></span>
			</SwitchLabel>

			<Label htmlFor="toggle">°F</Label>
		</Content>
	);
};
