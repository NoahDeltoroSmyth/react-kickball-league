import { render } from '@testing-library/react';
import Players from '../src/Components/PlayerFunction/Players';

test('page displays an h1 of a player name', () => {
  const container = render(<h1>{Players}</h1>);
  expect(container).toMatchSnapshot();
});
