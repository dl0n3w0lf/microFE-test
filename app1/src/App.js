import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [messageApp1, setMessageApp1] = useState('Placeholder for App1')

  useEffect(() => {
    const handler = (ev: MessageEvent<{ type: string, message: string }>) => {
      console.log(ev);
      setMessageApp1(ev.data.message)
    }

    window.addEventListener('message', handler)

  }, [])

  function handleClick(e) {
    window.parent.postMessage(
      {
        type: 'click',
        message: 'App1 logo clicked',
      },
      '*'
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <button id="button1" onClick={handleClick}>
          <p>
            {messageApp1}
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>
    </div>
  );
}

export default App;
