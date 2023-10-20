import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  const handleInput = (e) => setText(e.target.value)

  return (
    <>
      <img data-testid="giphy" src="https://media.giphy.com/media/4qx6IRdg26uZ3MTtRn/giphy.gif" alt="giphy" />
      <div>
        <input type="text" onChange={handleInput} placeholder='escribe tu nombre' />
        <h1>Hola {text}</h1>
      </div>
    </>
  )
}

export default App
