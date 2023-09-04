import './App.css';
import React, { useState } from 'react';
import { randomFunc } from './algo';

function App() {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const parsedMax = parseInt(max);
    const parsedMin = parseInt(min);

    if (!isNaN(parsedMax) && !isNaN(parsedMin)) {
      const result = randomFunc(parsedMax, parsedMin);
      setRandomNumber(result);
    }
  };

  return (
    <div className="App">
      <h1>Random Number Generator!</h1>
      <form>
        <label>
          <input
            type="text"
            name="Max"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="Min"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </label>
        <input
          type="button"
          value="Generate"
          onClick={generateRandomNumber}
        />
      </form>
      {randomNumber !== null && <p>Your Random Number Mister {randomNumber}</p>}
    </div>
  );
}

export default App;
