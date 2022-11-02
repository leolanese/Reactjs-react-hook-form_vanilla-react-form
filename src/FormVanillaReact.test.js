import { render, screen } from '@testing-library/react';
import FormVanillaReact from './FormVanillaReact';

test('renders Vanilla form', () => {
  render(<FormVanillaReact />);
  const emailElement = screen.getByText(/Email/i);
  expect(emailElement).toBeInTheDocument();

  const passwordElement = screen.getByText(/Password/i);
  expect(passwordElement).toBeInTheDocument();
});
