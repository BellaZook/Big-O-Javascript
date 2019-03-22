import React, { Component } from 'react';
import './App.css';
import Header from '../components/header';
import BigONChart from '../subjects/bigO-n-Chart';
import AppLinks from '../subjects/links';
import ArrayStructure from '../subjects/array';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Javascript Big-O" />
        <div className="App">
          <AppLinks />
          <BigONChart />
          <ArrayStructure />
        </div>

      </div>
    );
  }
}

export default App;


