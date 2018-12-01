import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ListInvoices from './components/ListInvoices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ListInvoices/>
        </div>
      </div>

    );
  }
}

export default App;
