import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { CarouselApi } from "../../Api/CarouselApi"
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const CarouselElement = () =>{
  return(
    <section className="Carousel-Container">
            <Carousel>
              {CarouselApi.map(item =>(
                <div className="Carousel-Element">
                  <picture>
                    <source srcset={item.imageMovil} media="(max-width: 500px)"/>
                    <source srcset={item.imageTablet} media="(max-width: 800px)"/>
                    <img src={item.imageDesktop} alt={item.title}/>
                  </picture>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                    <Link to="/">See Our Portfolio <AiOutlineArrowRight/></Link>
                  </div>
                </div>
              ))}
            </Carousel>
    </section>
  )
}

export default CarouselElement