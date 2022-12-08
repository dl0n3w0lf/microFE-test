import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [messageApp2, setMessageApp2] = useState('Placeholder for App2')

  useEffect(() => {
    const handler = (ev: MessageEvent<{ type: string, message: string }>) => {
      console.log(ev);
      setMessageApp2(ev.data.message)
    }

    window.addEventListener('message', handler)

  }, [])

  function handleClick(e) {
    window.parent.postMessage(
      {
        type: 'click',
        message: 'App2 logo clicked',
      },
      '*'
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <button id="button2" onClick={handleClick}>
          <p>
            {messageApp2}
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </button>
      </header>
    </div>
  );
}

export default App;
