import React from 'react';
import { render } from '@testing-library/react';
import Teams from './Teams';

test('page displays info on a team', () => {
  const container = render(<Teams name="{name}" />);
  expect(container).toMatchSnapshot();
});
