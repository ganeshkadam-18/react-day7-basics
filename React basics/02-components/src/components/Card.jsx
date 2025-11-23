import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" width="333"
        style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default card
