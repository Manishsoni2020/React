import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name.jsx'
import Details from './Details.jsx'
import Information from './Information.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>hey i am h1 tag</h1> */}
      <Name/>
      <Details/>
      <Information/>
    </>
  )
}

export default App
