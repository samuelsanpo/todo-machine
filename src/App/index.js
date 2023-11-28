import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { Animation } from '../Animation';
import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className='Container-App'>
        <Animation />
        <AppUI />
      </div>
    </TodoProvider>
  );
}



export default App;
