import './index.css';

import createHistory  from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const history = createHistory()
ReactDOM.render(
  <Router history={history}>
  <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
