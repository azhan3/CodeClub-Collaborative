import logo from './logo.png';
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
          Join the Discord Server
        </a>
      </header>
    </div>
  );
}

export default App;
