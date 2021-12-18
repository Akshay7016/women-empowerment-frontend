import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import SchemeComponent from "./components/SchemeComponent";



test('render Data from Scheme Component', () => {
  render(
    <Provider store={store} >
      <SchemeComponent />
    </Provider>);
  const linkElement = screen.getByText('Scheme Component');
  expect(linkElement).toBeInTheDocument();
});


test('render Data from Scheme Component', () => {
  render(
    <Provider store={store} >
      <SchemeComponent />
    </Provider>);
  const linkElement = screen.getByText('Find scheme by Id');
  expect(linkElement).toBeInTheDocument();
});

