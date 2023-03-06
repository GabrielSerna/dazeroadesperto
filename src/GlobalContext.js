import { createContext, useState } from "react";

// create context
export const GlobalContext = createContext({
  searchParam: '',
  handleOnChange: () => {},
  handleSubmit: () => {},
  movieList: [],
  loading: false
});

const GlobalState = ({children}) => {

  // state
  const [searchParam, setSearchParam] = useState('');

  // events
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchParam(e.target.value);
  };
  const handleSubmit = () => {};
  
  const contextValue = {
    searchParam,
    handleOnChange,
    handleSubmit,
    movieList: [],
    loading: false
  };

  // render here
  return (
    // create provider - chiudere all'interno del contesto tutti i componenti che useranno questo context
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;