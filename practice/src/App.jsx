import { useState } from 'react'
import Header from './Header.jsx' 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import Notfound from './Notfound.jsx'
import Home from './Home.jsx'
import ApiFatch from './ApiFatch.jsx'
import Api2 from './Api2.jsx'
import Api3 from './Api3.jsx'
import Api4 from './Api4.jsx';

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
        <Route path='ApiFatch' element={<ApiFatch/>}/>
        <Route path='/Api2' element={<Api2/>}/>
        <Route path='/Api3' element={<Api3/>}/>
        <Route path='/Api4' element={<Api4/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
