import React, { useState } from 'react';
import { BooksContext } from './BookContext';
import BlooksList from './BlooskList';

function App() {

  // REACT STATE
  const [ books, setBooks ] = useState(['libro1', 'libro2', 'libro3']);

  // RENDER HERE
  return (
    <>
      <BooksContext.Provider value={{books, setBooks}}>
        <BlooksList />
      </BooksContext.Provider>
    </>
  );
};

export default App;