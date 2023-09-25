import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
  return (
    <div className='nav'>
        
      <p className='artiz'>ARTIZ</p>
      <div className='link'>
      <Link to ="/">home</Link>
      <Link to ="/ill">illustration</Link>
      <Link to="/draw">drawing</Link>
      </div>
    </div>
  )
}

export default navbar