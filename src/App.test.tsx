import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history ={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
