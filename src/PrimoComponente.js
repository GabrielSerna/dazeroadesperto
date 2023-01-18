import React from 'react'

const PrimoComponente = (props) => {
  // debug
  console.log(props);

  // destructuring from props
  const { firstName, lastName, country } = props;

  return (
    <>
      <h5>
        {firstName}
      </h5>
      <h5>
        {lastName}
      </h5>
      <h5>
        {country}
      </h5>
    </>
  )
}

export default PrimoComponente