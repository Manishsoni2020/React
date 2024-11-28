import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
      <Link style={{margin:'20px'}} to={'./Home'}>Home</Link>
      <Link style={{margin:'20px'}} to={'/Signup'}>Signup</Link>
      <Link style={{margin:'20px'}} to={'/Signin'}>Signin</Link>
    </div>
  )
}

export default Header
