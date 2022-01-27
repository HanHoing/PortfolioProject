import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //상희꺼후에엥히잉
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});