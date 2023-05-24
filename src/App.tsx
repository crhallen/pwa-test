import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Test if its easy to install PWA</li>
          <li>Test if app can get geolocation</li>
          <li>Test if images etc can be saved offline</li>
          <li>Test if upload can be done in the background</li>
          <li>Test if its easy for user to get latest from PWA</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
