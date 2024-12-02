import logo from './logo.svg';
import './App.css';

function App() {
  const quote = fetch('https://flask-react-u1g4-cuyw9q32y-nicks-projects-82be4173.vercel.app/');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {quote}
        </p>
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
