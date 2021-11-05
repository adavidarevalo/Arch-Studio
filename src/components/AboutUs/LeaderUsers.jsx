import React from "react"
import { Link } from "react-router-dom"
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const LeaderUsers = ({data}) =>{
  const { name, title, image } = data
  return(
    <div className='LeaderUsers-Container'>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{title}</p>
      <div>
        <Link to='/'><AiFillLinkedin/></Link>
        <Link to='/'><AiFillTwitterSquare/></Link>
      </div>
    </div>
  )
}

export default LeaderUsers