import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'
import art1 from "../images/3.jpg"
import art2 from "../images/2.jpg"
export const Home = () => {
  return (
    <div className="App">
      <Link to='/illu' >
        <img className="img" src={art1}/>
      </Link>
      <Link to='/drawing' >
        <img className="img" src={art2}/>
      </Link>
    
</div>
  )
}

export default Home;