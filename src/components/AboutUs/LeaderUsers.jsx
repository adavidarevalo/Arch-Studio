import React from "react"

const LeaderUsers = ({data}) =>{
  const { name, title, image } = data
  return(
    <div>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{title}</p>
      <div>

      </div>
    </div>
  )
}

export default LeaderUsers