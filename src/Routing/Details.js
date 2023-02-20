import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

  const params = useParams();
  console.log(params);

  return (
    <div>Sono nel dettaglio</div>
  )
}

export default Details