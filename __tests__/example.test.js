import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExampleComponent from '../components/ExampleComponent';

describe('ExampleComponent', () => {
  test('renders ExampleComponent component', () => {
    render(<ExampleComponent />);
    expect(screen.getByText('Example text')).toBeInTheDocument();
  });
});