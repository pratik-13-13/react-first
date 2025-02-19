import  { useState } from 'react'

import './App.css'
import React from 'react'


function App() {
  const [count, setCount] = useState(0)
   let counter = 22
  return (
    <>
      <h1>learn react</h1>
      <h2>counter value:{counter}</h2>

      <button
      onClick={Addvalue}>Add value</button>
      <br />
      <button> remove value</button>
    </>
  )
}

export default App
