import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import { Provider } from './components/Context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container" style={{ paddingTop: '6em' }}>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
