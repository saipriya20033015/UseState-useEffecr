import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountMessage from './CountMessage';

function App() {
  const [count, setCount] = useState(0);
  const increaseValue = () =>{
    setCount(count + 1);
  };
  const decreaseValue = () =>{
    if(count <= 0){
      setCount(0);
    }
    else{
      setCount(count - 1);
    }
  };
  useEffect(() => {
    console.log("Count changed:", count);
  },[count]);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>count updated to {count}</h3>
      <div>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
{/*import React from 'react'
import { useState } from 'react'
export default function App() {
  const [value,setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    if(value <= 0){
      setValue(0);
    }
    else{
      setValue(value - 1);
    }
  };
  return (
    <div>
      <h1>useState Counter</h1>
      <h2>{value}</h2>
      <div>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
      </div>
    </div>
  );
}
*/}