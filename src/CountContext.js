import React, { useReducer, createContext } from 'react';

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error(`Ação desconhecida: ${action.type}`);
  }
};

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContext;
