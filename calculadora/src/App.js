import {
  useRef, useState
} from "react";
import './App.css';
import Result from './components/Result';

function App() {
  const inputRefVal1 = useRef(null);
  const inputRefVal2 = useRef(null);
  const [result, setResult] = useState(0);
  
  function plus(e) {
    e.preventDefault();
    setResult((result) => Number(inputRefVal2.current.value) + Number(inputRefVal1.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => Number(inputRefVal1.current.value) - Number(inputRefVal2.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => Number(inputRefVal1.current.value) * Number(inputRefVal2.current.value));
  };

  function divide(e) {
    e.preventDefault();
    if(inputRefVal2.current.value == 0){
      alert("Não existe divisão por zero");
    } else {
      setResult((result) => Number(inputRefVal1.current.value) / Number(inputRefVal2.current.value));
    }
  };

  function resetInput(e) {
    e.preventDefault();
    inputRefVal1.current.value = 0;
    inputRefVal2.current.value = 0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  };


  return (
    <div className="App">
      <div>
        <h1>Simple Working Calculator</h1>
      </div>
      <form>
        <p>First value</p>
        <input
          pattern="[0-9]"
          ref={inputRefVal1}
          type="number"
          placeholder="Type a number"
        />
        <p>Secund value</p>
        <input
          pattern="[0-9]"
          ref={inputRefVal2}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
        <Result result={result} />
      </form>
    </div>
  );
}

export default App;
