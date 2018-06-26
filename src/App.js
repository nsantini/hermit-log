import React, { Component } from 'react';
import logo from './hermies.png';
import './App.css';
import Entry from './Entry';
import { Box } from 'react-desktop/macOs';
import logs from './logs.json';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Box>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nicolas Santini's log</h1>
          <p className="App-intro">
            Welcome to my personal hermit site.
          </p>
        </Box>
        {logs.map(log => (
          <Entry file={'logs/' + log} />
        ))}
      </div>
    );
  }
}

export default App;
