import React from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

const app = () => {
  return (
    <div>
      <Search />
      <MovieList />
    </div>
  );
};

export default app