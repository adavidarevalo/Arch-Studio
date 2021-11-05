import React from 'react'
import CarouselElement from "../components/home/CarouselElement"
import WelcomeElement from "../components/home/WelcomeElement"
import IdeasBanner from "../components/home/IdeasBanner"
import FeaturedElement from "../components/home/FeaturedElement"
import AsideBanner from '../components/Shared/AsideBanner'

const Home = () => {
    return(
        <>
        <AsideBanner page='Home'/>
        <main>
          <CarouselElement/>
          <WelcomeElement/>
          <IdeasBanner/>
          <FeaturedElement/>
        </main>
        </>
    )
}

export default Home