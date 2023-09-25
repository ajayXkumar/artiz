import React from 'react'
import "../App.css"
import data from "../arts"
const drawing = () => {
  return (
    <div className="App">
   
    {data.filter(item => item.category === 'drawing').map((item,index)=>(
      <div key={index}>
      <img className="img" src={item.image}/> 
     </div>

    ))

}
</div>
  )
}

export default drawing