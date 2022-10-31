import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { SelectCities } from '.';

describe('<SelectCities />', () => {
	it('Should change select option correctly', () => {
		render(<SelectCities handleSelectChange={() => {}} />);

		expect((screen.getByText(/Select a city/i) as HTMLOptionElement).selected).toBeTruthy();

		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lisbon' } });

		expect((screen.getByText(/Lisbon/i) as HTMLOptionElement).selected).toBeTruthy();
	});

	it('Should call handleSelectChange with correct value', () => {
		const mockHandleSelectChange = jest.fn();

		render(<SelectCities handleSelectChange={mockHandleSelectChange} />);

		fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lisbon' } });

		expect(mockHandleSelectChange).toBeCalledTimes(1);
		expect(mockHandleSelectChange).toBeCalledWith('lisbon');
	});
});
