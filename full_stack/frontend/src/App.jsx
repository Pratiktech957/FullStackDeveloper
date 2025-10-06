import React from 'react'
import { useState } from 'react'

const App = () => {

  const [jokes, setjokes] = useState([])
  return (
    <>
      <h1>
        full stack developer
      </h1>
      <p>Jokes:{jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div>
            key={joke.id}
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>


        })
      }

    </>
  )
}

export default App
