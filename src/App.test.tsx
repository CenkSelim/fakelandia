import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const textTitle = screen.getByText(/Fakelandia Justice Department/i);
  expect(textTitle).toBeInTheDocument();
});
