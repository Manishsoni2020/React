import { useState } from 'react'
import Header from './Header.jsx' 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import Notfound from './Notfound.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
