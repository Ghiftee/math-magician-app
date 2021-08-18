import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/home';

test('expect home page to match working snapshot', () => {
  const homePage = renderer.create(<Home />).toJSON();
  expect(homePage).toMatchSnapshot();
});
