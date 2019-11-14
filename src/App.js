import React, { useState } from 'react';
import updateQueue from'./Backend';


import logo from './logo.svg';
import './App.css';

import SinVal from './SinVal';

function App() {


  const [sinVal, setSinVal] = useState(2);

  updateQueue(setSinVal);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SinVal value={sinVal}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
