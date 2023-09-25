import React from 'react'
import "../App.css"
import data from "../arts"
export const Home = () => {
  return (
    <div className="App">
       
    {data.map((item,index)=>(
      <div key={index}>
      <img className="img" src={item.image}/>
      
      </div>

    ))

}
</div>
  )
}

export default Home;