import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //상희꺼후에엥히잉 호호호?
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});