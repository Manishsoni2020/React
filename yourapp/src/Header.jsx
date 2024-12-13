import React from 'react'
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <div>
      <h1>I am header </h1>   
      <Link to={Home.jsx}></Link>
      <Link to={Footer.jsx}></Link>
    </div>
  )
}

export default Header
