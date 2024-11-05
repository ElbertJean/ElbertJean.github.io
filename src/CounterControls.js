import React, { useContext } from 'react';
import CountContext from './CountContext';

const CounterControls = () => {
  const { dispatch } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
};

export default CounterControls;
