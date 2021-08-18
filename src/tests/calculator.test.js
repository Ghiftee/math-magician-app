import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import CalcPage from '../pages/calculator';
import Home from '../pages/home';

test('expect calculator element to match working snapshot', () => {
  const calculatorComponent = renderer.create(<Calculator />).toJSON();
  expect(calculatorComponent).toMatchSnapshot();
});

test('expect calculator page to match working snapshot', () => {
  const calculatorPage = renderer.create(<CalcPage />).toJSON();
  expect(calculatorPage).toMatchSnapshot();
});

test('expect home page to match working snapshot', () => {
  const homePage = renderer.create(<Home />).toJSON();
  expect(homePage).toMatchSnapshot();
});

test('expect one plus two to equal 3', () => {
  const { container } = render(<Calculator />);
  const display = container.querySelector('input');

  const buttonOne = screen.getByText(/1/);
  const buttonTwo = screen.getByText(/2/);
  const additionButton = screen.getByText('+');
  const equalsButton = screen.getByText(/=/);

  fireEvent.click(buttonOne);
  fireEvent.click(additionButton);
  fireEvent.click(buttonTwo);
  fireEvent.click(equalsButton);

  expect(display.value).toEqual('3');
});

test('expect four times fives to equal 20', () => {
  const { container } = render(<Calculator />);
  const display = container.querySelector('input');

  const buttonFour = screen.getByText(/4/);
  const buttonFive = screen.getByText(/5/);
  const timesButton = screen.getByText('x');
  const equalsButton = screen.getByText(/=/);

  fireEvent.click(buttonFour);
  fireEvent.click(timesButton);
  fireEvent.click(buttonFive);
  fireEvent.click(equalsButton);

  expect(display.value).toEqual('20');
});

test('expect 200 modulo 3 equal 2', () => {
  const { container } = render(<Calculator />);
  const display = container.querySelector('input');

  const buttonZero = screen.getByText(/0/);
  const buttonTwo = screen.getByText(/2/);
  const buttonThree = screen.getByText(/3/);

  const moduloButton = screen.getByText('%');
  const equalsButton = screen.getByText(/=/);

  fireEvent.click(buttonTwo);
  fireEvent.click(buttonZero);
  fireEvent.click(buttonZero);
  fireEvent.click(moduloButton);
  fireEvent.click(buttonThree);
  fireEvent.click(equalsButton);

  expect(display.value).toEqual('2');
});
