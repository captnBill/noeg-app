import logo from './img/dubetonlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-logo">
        <img src={logo} className="Bg-logo-img" alt="logo" />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vous devinerez jamais ce qu'on fait
        </p>
        <a
          className="App-link"
          href="https://fr.wikipedia.org/wiki/Béton_de_ciment"
          target="_blank"
          rel="noopener noreferrer"
        >
          indice : c'est du béton
        </a>
      </header>
    </div>
  );
}

export default App;