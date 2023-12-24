import { render, screen } from '@testing-library/react';
import Navbar from '../components/ui/_LNavbar';

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />);
    expect(screen.getByText('MyUzo')).toBeInTheDocument();
  });

  it('contains link to the home page', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});