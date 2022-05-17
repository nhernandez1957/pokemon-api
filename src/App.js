import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gotta Catch 'em All!</h1>

        <PokeList/>
      </header>
    </div>
  );
}

export default App;
