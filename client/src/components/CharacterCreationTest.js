import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCreation from './CharacterCreation'; // Update the path to your component file

describe('CharacterCreation', () => {
  it('renders the title', () => {
    render(<CharacterCreation />);
    const titleElement = screen.getByText(/Character Creation/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('updates character info on input change', () => {
    render(<CharacterCreation />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  // Add similar tests for attribute, skill, and chronicle info changes

  it('logs character info when "See console log" button is clicked', () => {
    render(<CharacterCreation />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    const logButton = screen.getByText('See console log');
    fireEvent.click(logButton);
    // You might want to assert console logs in a more advanced way
  });

  // Add similar tests for attribute, skill, and chronicle info log buttons

  // Add tests for form submission behavior

  // Add more tests as needed
});
