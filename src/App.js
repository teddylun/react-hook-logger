import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterProvider, CounterContext } from './Context.js';

function Counter() {
  const {
    state,
    dispatch
  } = useContext(CounterContext)
  return (
    <div>
<h5>Count: {state.count}</h5>
      {/* TODO: Increment */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {/* TODO: Decrement */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

function SeparateComponent() {
  const { state, dispatch } = useContext(CounterContext)
  return (
    <div>
      <h1> Shared Count: {state.count} </h1> {/* TODO: FETCH*/ }
      <button onClick = {() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <SeparateComponent />
      </CounterProvider>
    </div>
  );
}

export default App;
