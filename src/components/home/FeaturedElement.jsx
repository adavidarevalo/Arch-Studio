import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";

const FeaturedElement = () =>{
  return(
    <section>
      <article>
        <h2>Featured</h2>
        <div>Elements</div>
        <Link>See All <AiOutlineArrowRight/></Link>
      </article>
    </section>
  )
}

export default FeaturedElement