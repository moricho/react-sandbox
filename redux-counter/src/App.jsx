import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import counterModule from './modules/counter';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());

  return (
    <div className="App">
      <p>{ counter }</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
