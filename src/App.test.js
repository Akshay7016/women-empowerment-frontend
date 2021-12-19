import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import UserSchemeComponent from './components/UserSchemeComponent';



test('render Data from Scheme Component', () => {
  render(
    <Provider store={store} >
      <UserSchemeComponent />
    </Provider>);
  const linkElement = screen.getByText('Scheme Component');
  expect(linkElement).toBeInTheDocument();
});


// test('render Data from Scheme Component', () => {
//   render(
//     <Provider store={store} >
//       <SchemeComponent />
//     </Provider>);
//   const linkElement = screen.getByText('Find scheme by Id');
//   expect(linkElement).toBeInTheDocument();
// });


// negative test case 
test('render Data from Scheme Component', () => {
  render(
    <Provider store={store} >
      <UserSchemeComponent />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});
