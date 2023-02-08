import React, { useContext } from 'react'
import { BooksContext } from './BookContext';

const BlooskList = () => {

  const { books } = useContext(BooksContext);

  return (
    <>
      <div>Lista di libri</div>
      <pre>
        {
          JSON.stringify(books)
        }
      </pre>
    </>
  )
};

export default BlooskList