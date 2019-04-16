import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Circle from './components/Circle';
import Button from './components/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Fragment>
          <div className="App container">
            <Circle color="red"/>
            <Circle color="green"/>
            <Circle color="blue"/>
          </div>
          <Button/>
      </Fragment>
    </Provider>
    );
  }
}

export default App;
