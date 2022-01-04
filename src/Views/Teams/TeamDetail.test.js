import React from 'react';
import { render } from '@testing-library/react';
import TeamDetail from './TeamDetail';

test.skip('teamdetail renders a team on the page', () => {
  const container = render(<TeamDetail teams />);
  expect(container).toMatchSnapshot();
});
