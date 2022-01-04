import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('home page displays welcome message', () => {
  const { getByText } = render(<Home />);
  const container = getByText(/Welcome to your local Kickball League Website/i);
  expect(container).toBeInTheDocument();
});
