import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const textElement = screen.getByText(/Fakelandia Justice Department/i);
  expect(textElement).toBeInTheDocument();
});
