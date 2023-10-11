import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Reservation from './components/Reservation';

describe('Reservation', () => {
  it('should render the reservation form', () => {
    render(<Reservation />);

    // Test input fields
    const occasionSelect = screen.getByLabelText('Occasion:');
    const preferencesSelect = screen.getByLabelText('Seating preferences:');
    const dateInput = screen.getByLabelText('Date:');
    const guestsInput = screen.getByLabelText('No of Guests:');
    const timeSelect = screen.getByLabelText('Choose time:');
    const fullNameInput = screen.getByLabelText('Full Name:');
    const emailInput = screen.getByLabelText('E-mail Id:');
    const mobileInput = screen.getByLabelText('(+1) Mobile Number');
    const commentsTextarea = screen.getByLabelText('Special Requests:');
    const confirmButton = screen.getByText('Confirm Reservation');

    expect(occasionSelect).toBeInTheDocument();
    expect(preferencesSelect).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(fullNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(mobileInput).toBeInTheDocument();
    expect(commentsTextarea).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.change(preferencesSelect, { target: { value: 'Indoors' } });
    fireEvent.change(dateInput, { target: { value: '2023-09-30' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(mobileInput, { target: { value: '1234567890' } });
    fireEvent.change(commentsTextarea, { target: { value: 'Special requests test' } });

    // Click the confirm button
    fireEvent.click(confirmButton);

  });
});





