import React, { useState } from 'react';
import BlooksList from './BlooskList';

function App() {

  // REACT STATE
  const [ books, setBooks ] = useState([]);

  // RENDER HERE
  return (
    <>
      <BlooksList/>
    </>
  );
};

export default App;