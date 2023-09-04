import './App.css';
import { randomFunc } from './algo';

function App() {
  return (
    <div className="App">
      <h1>Random Number Generator!</h1>
      <form>
        <label>
          <input type="text" name="Max" placeholder="Max" />
        </label>
        <label>
          <input type="text" name="Min" placeholder="Min" />
        </label>
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
}

export default App;
