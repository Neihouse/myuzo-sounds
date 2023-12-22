import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />);
    expect(screen.getByText('MyUzo')).toBeInTheDocument();
  });

  it('contains link to the home page', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'MyUzo' })).toHaveAttribute('href', '/');
  });
});