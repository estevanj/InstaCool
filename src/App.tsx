import * as React from 'react';
import './App.css';
import Header from './components/headers';
import Intro from './components/intro';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
       <Intro text ="Hola mundo"/>
       <Intro/>
      </div>
    )
  }
}

export default App;
