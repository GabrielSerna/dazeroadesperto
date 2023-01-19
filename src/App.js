import './App.css';
import React, { useState, useEffect, useRef, useReducer } from 'react';

function App() {

  // HOOKS
  const [ciao, setCiao] = useState('Gabriel');
  const [count, setCounter] = useState(0);
  const input = useRef(null)

  // useReducer
  const initialState = {
    flag: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'PREMI_BUTTON':
        console.log(state, action);
        return {
          ...state,
          flag: !state.flag
        };

      default:
        return state;
    }
  };
  const [ state, dispatch ] = useReducer(reducer, initialState);

  /*
    state = lo stato
    dispatch = funzione che serve ad indicare alla reducer function quella che è l'azione/azioni che deve essere compiuta per modificare il nostro state. Deve ritornare un oggetto
    reducer = funzione che prende in carico le azioni che devono essere compiute per mutare il nostro state
              richiede 2 parametri (state, action )
    initialState = valore iniziale (oggetto, ecc...)
  */

  // onClick events
  const changeName = () => {
    setCiao('Juan Gabriel Serna Torres');
  };

  const inc = () => {
    setCounter( count + 1 );
  };

  // useEffect
  useEffect(() => {
    console.log(`'Sono in useEffect()'`);
  }, [count]);

  // useRef
  const focusInput = () => {
    input.current.value = 'xxxxxxxxxxxxxx';
    input.current.type = 'password';
  };

  {/* <div className="App">
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

  <div>
    <button type='button' onClick={() => dispatch({ type: 'PREMI_BUTTON' }) }>Cliccami</button>
  </div> */}

  return (
    <div className="App">
      <button type='button' onClick={() => dispatch({ type: 'PREMI_BUTTON' }) }>Cliccami</button>
    </div>
  );
};

export default App;