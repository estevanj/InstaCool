import './App.css';

import * as React from 'react';
import { Route } from 'react-router';

import Login from './containers/Auth/Login';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact ={true} path='/' component={Login}/>
        <Route exact ={true} path='/' component={Login}/>
      </div>
    )
  }
}
export default App;
