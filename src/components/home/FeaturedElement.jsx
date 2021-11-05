import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";
import {FeatureApi} from '../../Api/FeatureApi'

const FeaturedElement = () =>{
  return(
    <section className='FeaturedElement'>
      <article>
        <div className='Featured-Header'>
          <h2>Featured</h2>
          <Link 
        to='/Portfolio'
        className='FeaturedElement-Button'
        >See All <AiOutlineArrowRight/></Link>
        </div>
        <div className='FeaturedElement-Container'>
          {FeatureApi.map(item => (
            <Link to='/Portfolio'>
              <div className='FeaturedElement-Element'>
                <picture>
                  <source srcset={item.imgMobile} media="(max-width: 500px)"/>
                  <source srcset={item.imgTablet} media="(max-width: 800px)"/>
                  <img src={item.imgDesktop} alt="Banner"/>
                </picture>
                <div>
                  <h3>{item.title}</h3>
                  <p>View All Projects</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link 
        to='/Portfolio'
        className='FeaturedElement-Button'
        >See All <AiOutlineArrowRight/></Link>
      </article>
    </section>
  )
}

export default FeaturedElement