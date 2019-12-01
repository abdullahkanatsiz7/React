import React from 'react'

function Joke(props) {
  return (
    <div>
      <p>Setup: {props.data.map(use => use.setup)}</p>
      <p>Punchline: {props.data.map(use => use.punchline)}</p>
    </div>
  )
}
export default Joke;
