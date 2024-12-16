import React from 'react'
import { Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <div>
      <h1>I am header </h1>   
      <Link style={{margin:'20px'}} to={'/Home'}>Home</Link>
      <Link style={{margin:'20px'}} to={'/Footer'}>Footer</Link>
    </div>
  )
} 

export default Header
