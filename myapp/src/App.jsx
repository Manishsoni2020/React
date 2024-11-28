import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Calculater from './Calculater.jsx'
import Form from './Form.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/> */
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ab' element={<About/>}/>
        <Route path='/con' element={<Contact/>}/>
        <Route path='cal' element={<Calculater/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
      }
    </>
  )
  
}

export default App
