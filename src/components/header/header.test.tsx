import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

test('renders header', () => {
    render(<Header />, {wrapper: BrowserRouter});
    let linkHome = screen.getAllByText(/home/i)[0] as HTMLAnchorElement;
    let linkMisD = screen.getAllByText(/misdemeanours/i)[0] as HTMLAnchorElement;
    expect(linkHome.href).toContain('/home');;
    expect(linkMisD.href).toContain('/misdemeanours');;
});
