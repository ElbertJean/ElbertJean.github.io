import React from 'react';
import { CountProvider } from './CountContext'; // Crie este arquivo
import CounterDisplay from './CounterDisplay'; // Crie este arquivo
import CounterControls from './CounterControls'; // Crie este arquivo

const App = () => {
  return (
    <CountProvider>
      <CounterDisplay />
      <CounterControls />
    </CountProvider>
  );
};

export default App;
