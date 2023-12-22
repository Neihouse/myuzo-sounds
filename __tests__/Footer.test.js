import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  it('renders the copyright notice', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(`
© ${currentYear} MyUzo E-commerce. All rights reserved.`)).toBeInTheDocument();
  });
});