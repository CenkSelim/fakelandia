import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const textTitle = screen.getAllByText(/Fakelandia Justice Department/i);
  expect(textTitle.length).toEqual(2);
});
