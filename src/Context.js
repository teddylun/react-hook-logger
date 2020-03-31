// Context.js
import React, { useReducer } from 'react'

const initialState = {
  count: 100
}

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state, count: state.count + 1
      };
    case "decrement":
      return {
        ...state, count: state.count - 1
      };
    case "reset":
      return {
        ...state, count: initialState.count
      }
    default:
      throw new Error();
  }
}
const logger = (reducer) => {
  const reducerWithLogger = (state, action) => {
    let nextState = reducer(state, action);
    console.group();
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", nextState);
    console.groupEnd();
    return nextState;
  };
  return reducerWithLogger;
}

const CounterContext = React.createContext(initialState);

function CounterProvider(props) {
  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
    initialState
  )
  return (
    <CounterContext.Provider value={{  state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export {
  CounterContext,
  CounterProvider
}