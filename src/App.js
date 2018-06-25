import React, { Component } from 'react';
import logo from './hermies.png';
import './App.css';
import Entry from './Entry';
import logs from './logs.json';
import { Box } from 'react-desktop/macOs';

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
          <Entry
            title={log.title}
            text={log.text}
            date={log.date}
            />
        ))}
      </div>
    );
  }
}

export default App;
