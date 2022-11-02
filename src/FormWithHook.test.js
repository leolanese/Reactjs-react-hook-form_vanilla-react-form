import { render, screen } from '@testing-library/react';
import FormWithHook from './FormWithHook';

test('renders form-with-hook library form', () => {
  render(<FormWithHook />);
  const emailElement = screen.getByText(/Email/i);
  expect(emailElement).toBeInTheDocument();

  const passwordElement = screen.getByText(/Password/i);
  expect(passwordElement).toBeInTheDocument();
});
