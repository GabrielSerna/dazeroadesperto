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
  const [movieList, setMovieList] = useState([]);

  // events
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchParam(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await fetch(`http://www.omdbapi.com?apikey=9b35fd07&s=${searchParam}`);
    const data = await response.json();
    console.log(data);
    if (data) setMovieList(data.Search);
  };
  
  const contextValue = {
    searchParam,
    handleOnChange,
    handleSubmit,
    movieList,
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