import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Test if the Counter component renders without errors and if the counters are displayed on the screen
test('renders the Counter component', () => {
  const { getByText } = render(<Counter />);
  const dishCounter = getByText(/Dish=/i);
  const bowCounter = getByText(/Bow=/i);
  const counter1 = getByText(/Counter1=/i);
  expect(dishCounter).toBeInTheDocument();
  expect(bowCounter).toBeInTheDocument();
  expect(counter1).toBeInTheDocument();
});

// Test if the dish counter increments when the "Use a dish" button is clicked
test('increments the dish counter when the "Use a dish" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const dishCounter = getByText(/Dish=/i);
  const useDishButton = getByText(/Use a dish/i);
  fireEvent.click(useDishButton);
  expect(dishCounter).toHaveTextContent('Dish=1');
});

// Test if the dish counter resets to 0 when the "Clean all dish" button is clicked
test('resets the dish counter when the "Clean all dish" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const dishCounter = getByText(/Dish=/i);
  const useDishButton = getByText(/Use a dish/i);
  const cleanDishButton = getByText(/Clean all dish/i);
  fireEvent.click(useDishButton);
  fireEvent.click(cleanDishButton);
  expect(dishCounter).toHaveTextContent('Dish=0');
});

// Test if the bow counter increments when the "Use a bow" button is clicked
test('increments the bow counter when the "Use a bow" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const bowCounter = getByText(/Bow=/i);
  const useBowButton = getByText(/Use a bow/i);
  fireEvent.click(useBowButton);
  expect(bowCounter).toHaveTextContent('Bow=1');
});

// Test if the bow counter resets to 0 when the "Clean all bow" button is clicked
test('resets the bow counter when the "Clean all bow" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const bowCounter = getByText(/Bow=/i);
  const useBowButton = getByText(/Use a bow/i);
  const cleanBowButton = getByText(/Clean all bow/i);
  fireEvent.click(useBowButton);
  fireEvent.click(cleanBowButton);
  expect(bowCounter).toHaveTextContent('Bow=0');
});

// Test if the counter1 increments when the "Add1" button is clicked
test('increments the counter1 when the "Add1" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const counter1 = getByText(/Counter1=/i);
  const addButton = getByText(/Add1/i);
  fireEvent.click(addButton);
  expect(counter1).toHaveTextContent('Counter1=1');
});
