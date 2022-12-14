import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TemperatureSwitch } from '.';

describe('<TemperatureSwitch />', () => {
	it('Should call handleSwitchChange with correct value', () => {
		const mockHandleSwitchChange = jest.fn();

		render(<TemperatureSwitch disabled={false} handleSwitchChange={mockHandleSwitchChange} />);

		fireEvent.click(screen.getByText(/°F/i));

		expect(mockHandleSwitchChange).toHaveBeenCalledTimes(1);
		expect(mockHandleSwitchChange).toHaveBeenLastCalledWith(true);

		fireEvent.click(screen.getByText(/°C/i));

		expect(mockHandleSwitchChange).toHaveBeenCalledTimes(2);
		expect(mockHandleSwitchChange).toHaveBeenLastCalledWith(false);
	});

	it('Should disable switch when disabled prop is true', () => {
		render(<TemperatureSwitch disabled handleSwitchChange={() => {}} />);

		expect(screen.getByRole('switch')).toBeDisabled();
	});
});
