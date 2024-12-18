import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx';



function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/Footer' element={<Footer/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
