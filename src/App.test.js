import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Current Page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Current Page/i);
  expect(linkElement).toBeInTheDocument();
});
