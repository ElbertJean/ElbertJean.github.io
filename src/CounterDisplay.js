import React, { useContext } from 'react';
import CountContext from './CountContext';

const CounterDisplay = () => {
  const { count } = useContext(CountContext);
  return <h1>Contagem: {count}</h1>;
};

export default CounterDisplay;
