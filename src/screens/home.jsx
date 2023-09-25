import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'
import art1 from "../images/ill.jpg"
import art2 from "../images/illu.jpg"
import art3 from "../images/pics.jpg"
export const Home = () => {
  return (
    <div className="App">
      <Link to='/illu' >
        <img className="img" src={art1}/>
      </Link>
      <Link to='/drawing' >
        <img className="img" src={art2}/>
      </Link>
      <Link to='/clicks' >
        <img className="img" src={art3}/>
      </Link>
    
</div>
  )
}

export default Home;