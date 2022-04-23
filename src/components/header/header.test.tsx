import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

test('renders header', () => {
    render(<Header />, {wrapper: BrowserRouter});
    let link = screen.getAllByText(/home/i)[0] as HTMLAnchorElement;
    expect(link.href).toContain('/');;
});
