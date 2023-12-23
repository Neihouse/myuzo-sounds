import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});