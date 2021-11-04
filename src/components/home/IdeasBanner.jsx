import React from "react"
import BannerDesktop from "../../assets/home/desktop/BannerDesktop.jpg"
import BannerMovil from "../../assets/home/mobile/BannerMovil.jpg"
import BannerTablet from "../../assets/home/tablet/BannerTablet.jpg"
import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai";

const IdeasBanner = () =>{
  return(
    <section className="BannerIdeas-Container">
      <article>
        <picture>
          <source srcset={BannerMovil} media="(max-width: 500px)"/>
          <source srcset={BannerTablet} media="(max-width: 800px)"/>
          <img src={BannerDesktop} alt="Banner"/>
        </picture>
        <div>
          <h2>Small team big ideas</h2>
          <Link to="/">About Us <AiOutlineArrowRight/></Link>
        </div>
      </article>
    </section>
  )
}

export default IdeasBanner