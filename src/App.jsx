import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import { Provider } from './components/Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
