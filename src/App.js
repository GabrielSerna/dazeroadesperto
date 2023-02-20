import React from 'react';
import Search from './components/search';
import MovieList from './components/movieList';

const app = () => {
  return (
    <div>
      <Search />
      <MovieList />
    </div>
  );
};

export default app