import React, { Component } from 'react';
import logo from './hermies.png';
import './App.css';
import Entry from './Entry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logs: []
    };
  }

  componentWillMount() {
    fetch('/logs.json')
    .then((response) => response.json())
    .then((logs) => this.setState({ logs }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-title">Nicolas Santini's log</h1>
          <p className="App-intro">
            Welcome to my personal hermit site.
          </p>
        </div>
        {this.state.logs.map(log => (
          <Entry key={log} file={'logs/' + log} />
        ))}
      </div>
    );
  }
}

export default App;
