import React, { Component } from 'react';
import './App.css';
import Header from '../components/header';
import BigONChart from '../components/subjects/bigO-n-Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Javascript Big-O" />
        <BigONChart />
      </div>
    );
  }
}

export default App;
