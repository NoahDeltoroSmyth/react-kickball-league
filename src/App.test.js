import { render, screen } from '@testing-library/react';
import App from './App';
import Players from '../src/Components/PlayerFunction/Players';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/players/i);
  expect(linkElement).toBeInTheDocument();
});

test.skip('page displays an h1 of a player name', () => {
  const container = render(<h1>{Players}</h1>);
  expect(container).toMatchSnapshot();
});
