import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';

const MovieList = () => {

  const { movieList } = useContext(GlobalContext);
  console.log(movieList);

  return (
    <div>
      {
        movieList && movieList.length < 1
        ? 'Nessun film'
        : movieList.map((item, idx) => (
          <div key={idx}>
            <h2>{item.Title} - {item.Year}</h2>
            <img src={item.Poster} alt="Poster"></img>
          </div>
        ))
      }
    </div>
  );
};

export default MovieList