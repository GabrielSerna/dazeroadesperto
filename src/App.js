import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [ciao, setCiao] = useState('Gabriel');
  const [count, setCounter] = useState(0);
  const input = useRef(null)

  const changeName = () => {
    setCiao('Juan Gabriel Serna Torres');
  };

  const inc = () => {
    setCounter( count + 1 );
  };

  useEffect(() => {
    console.log(`'Sono in useEffect()'`);
  }, [count]);

  const focusInput = () => {
    input.current.value = 'xxxxxxxxxxxxxx';
    input.current.type = 'password';
  };

  return (
    <>
      <div className="App">
        {
          count
        }
        <button type='button' onClick={(inc)}>Cliccami</button>
      </div>

      <br/>

      <div>
        <input ref={input} type="text" placeholder='scrivi qualcosa qui'></input>
        <button onClick={focusInput}>Bottone useRef</button>
      </div>
      </>
  );
};

export default App;