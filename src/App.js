import React, { useState } from 'react';
import BlooksList from './BlooskList';

function App() {

  // REACT STATE
  const [ books, setBooks ] = useState([]);

  // 1 create context
  const BooksContext = React.createContext();

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