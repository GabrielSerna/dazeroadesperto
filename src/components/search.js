import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';

const Search = () => {

  const { searchParam, handleOnChange } = useContext(GlobalContext);

  return (
    <div>
      <input
        name = 'search'
        placeholder = 'Enter movie keyword here'
        value = { searchParam }
        onChange = { handleOnChange }
      />
      <button>Submit search</button>
    </div>
  );
};

export default Search