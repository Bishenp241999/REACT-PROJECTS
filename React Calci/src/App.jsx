import { useState } from 'react';


function App() {
  const [input, setInput] = useState('');

  function handleClick(value) {
    setInput(input + value);
  }

  function handleClear() {
    setInput('');
  }

  function handleBackspace() {
    setInput(input.slice(0, -1));
  }

  function handleCalculate() {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  }

  return (
    <div>
      <h1>REACT CALCI</h1>
      <div className="app">
        <div className="calculator">
          <div className="display">{input}</div>
          <div className="buttons">
            <button onClick={handleClear}>C</button>
            <button onClick={handleBackspace}>←</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button className="zero" onClick={() => handleClick('0')}>0</button>
            <button className="equals" onClick={handleCalculate}>=</button>
            {/* <button onClick={() => handleClick('**2')}>x<sup>2</sup></button>
            <button onClick={() => handleClick('%')}>Modulo</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
