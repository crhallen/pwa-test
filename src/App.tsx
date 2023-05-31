import logo from './logo.svg';
import './App.css';
import { GetGeolocationButton } from './GetGeolocationButton';
import { AudioRecording } from './AudioRecording';
import { PhotoCapture } from './PhotoCapture';

function App() {
  // store audio blobs to state as an array

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 id="install-instructions">
          You're accessing via the browser. Don't forget to install the PWA
        </h3>
        <p style={{ fontSize: 12 }}>{process.env.REACT_APP_HASH}</p>
        <hr />
        <GetGeolocationButton />
        <hr />
        <AudioRecording />
        <hr />
        <PhotoCapture />
        <hr />
        <h3>Todo list</h3>
        <ul className="checklist">
          <li>Test if upload can be done in the background</li>
          <li>Test syncing db</li>
          <li>Test if its easy for user to get latest version of app</li>
          <li className="done">
            Test if its easy to install PWA {'>'} (clunky on iOS)
          </li>
          <li className="done">Test if app can get geolocation</li>
          <li className="done">Test if images can be saved offline</li>
          <li className="done">
            Test if audio recordings can be saved offline
          </li>
        </ul>
        <button
          style={{ marginTop: 30 }}
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </header>
    </div>
  );
}

export default App;
