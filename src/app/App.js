import React, { Component } from 'react';
import './App.css';
import Header from '../components/header';
import BigONChart from '../components/subjects/bigO-n-Chart';
import AppLinks from '../components/subjects/links';
import ArrayStructure from '../components/subjects/array';

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


