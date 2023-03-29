import { render, screen } from '@testing-library/react';
import App from './App';

test('renders to do', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do/i);
  expect(linkElement).toBeInTheDocument();
});
