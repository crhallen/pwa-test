import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GetGeolocationButton } from './GetGeolocationButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Test if its easy to install PWA--- (Its clunky on iOS)</li>
          <li>Test if app can get geolocation--- yep</li>
          <li>Test if images etc can be saved offline</li>
          <li>Test if upload can be done in the background</li>
          <li>Test if its easy for user to get latest from PWA</li>
        </ul>
        <h3 id="install-instructions">Make sure you install the PWA!</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <GetGeolocationButton />
        <hr />
      </header>
    </div>
  );
}

export default App;
