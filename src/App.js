import './App.css';
import React, { useRef, useReducer } from 'react';

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        console.log(state, action);
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];

      case 'remove':
        console.log(state, action);
        return state.filter((el, idx) => idx !== action.idx);

      default:
        return state;
    }
  };
  const inputRef = useRef();
  const [ items, dispatch ] = useReducer(reducer, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" ref={inputRef}>
        </input>
      </form>

      <br/>

      <ul>
        {
          items.map((el, idx) => (
            <li key={idx}>
              {el.name}
              <button onClick={() => dispatch({type: "remove", idx})}>x</button>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default App;