import logo from './logo.png';
import First_Floor from './First_Floor_rea.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Harry Wang AI
            - In development
          </code>
        </p>
        <a
          className="App-link"
          href="https://discord.gg/dhEfUkbJ38"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Code Club Discord Server
        </a>
        <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>
        <img src={First_Floor} className="Map" alt="map"/>

      </header>
    </div>
  );
}

export default App;
