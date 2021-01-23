
import './App.css';
import React, {useEffect} from 'react';
import {initSocket, disconnectSocket} from './services.js'

function App() {
  useEffect(() => {
    initSocket();
    return () => disconnectSocket();
  });
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
