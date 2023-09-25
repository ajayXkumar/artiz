import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'
import art1 from "../images/1.jpg"
export const Home = () => {
  return (
    <div className="App">

      <Link to='/illu' >
        <img className="img" src={art1}/>
        <p className='illu' text-decoration ="none ">Illustration</p>
      </Link>
</div>
  )
}

export default Home;