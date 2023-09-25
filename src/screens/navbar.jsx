import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
  return (
    <div className='nav'>
        
      <p className='artiz'>ARTIZ</p>
      <div className='link'>
      <Link to ="/">home</Link>
      <Link to ="/illu">illustration</Link>
      <Link to="/drawING">drawing</Link>
      </div>
    </div>
  )
}

export default navbar